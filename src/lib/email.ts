import { Resend } from "resend";
import BookingConfirmation from "@/emails/BookingConfirmation";
import BookingNotification from "@/emails/BookingNotification";
import BookingReminder24h from "@/emails/BookingReminder24h";
import BookingReminder1h from "@/emails/BookingReminder1h";
import { getScheduledAt24h, getScheduledAt1h } from "@/lib/emailHelpers";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "StanAutomation <spotkania@stanautomation.com>";
const INTERNAL = "stanislaw@stanautomation.com";

export interface BookingEmailData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  restaurant_name: string;
  position: string;
  meeting_date: string;
  time_slot: string;
}

export async function sendBookingEmails(booking: BookingEmailData) {
  const results = await Promise.allSettled([
    resend.emails.send({
      from: FROM,
      to: booking.email,
      subject: `Potwierdzenie spotkania — ${booking.restaurant_name}`,
      react: BookingConfirmation({ booking }),
    }),
    resend.emails.send({
      from: FROM,
      to: INTERNAL,
      subject: `Nowe spotkanie: ${booking.restaurant_name} — ${booking.meeting_date} ${booking.time_slot}`,
      react: BookingNotification({ booking }),
    }),
    resend.emails.send({
      from: FROM,
      to: booking.email,
      subject: `Jutro o ${booking.time_slot} — spotkanie ze StanAutomation`,
      react: BookingReminder24h({ booking }),
      scheduledAt: getScheduledAt24h(booking.meeting_date),
    }),
    resend.emails.send({
      from: FROM,
      to: booking.email,
      subject: `Za godzinę — spotkanie ze StanAutomation`,
      react: BookingReminder1h({ booking }),
      scheduledAt: getScheduledAt1h(booking.meeting_date, booking.time_slot),
    }),
  ]);

  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[email] send failed:", result.reason);
    }
  }
}
