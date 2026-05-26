import { render } from "@react-email/render";
import { notFound } from "next/navigation";
import BookingConfirmation from "@/emails/BookingConfirmation";
import BookingNotification from "@/emails/BookingNotification";
import BookingReminder24h from "@/emails/BookingReminder24h";
import BookingReminder1h from "@/emails/BookingReminder1h";
import EmailPreviewClient from "./EmailPreviewClient";

const mockBooking = {
  first_name: "Jan",
  last_name: "Kowalski",
  email: "jan.kowalski@example.com",
  phone: "+48 500 123 456",
  restaurant_name: "Restauracja Morska",
  position: "właściciel",
  meeting_date: "2026-05-28",
  time_slot: "11:00",
};

export default async function EmailPreviewPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const toLocal = (html: string) =>
    html.replace(/https:\/\/stanautomation\.com/g, "http://localhost:3000");

  const [confirmation, notification, reminder24h, reminder1h] = (
    await Promise.all([
      render(<BookingConfirmation booking={mockBooking} />),
      render(<BookingNotification booking={mockBooking} />),
      render(<BookingReminder24h booking={mockBooking} />),
      render(<BookingReminder1h booking={mockBooking} />),
    ])
  ).map(toLocal);

  return (
    <EmailPreviewClient
      templates={{ confirmation, notification, reminder24h, reminder1h }}
    />
  );
}
