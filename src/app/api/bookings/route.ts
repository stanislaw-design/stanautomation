import { NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { validateBooking, sanitizeBooking, BookingFields } from "@/lib/validation";
import { sendBookingEmails } from "@/lib/email";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Nieprawidłowe dane" }, { status: 400 });
  }

  const fields = body as BookingFields;
  const errors = validateBooking(fields);

  if (errors.length > 0) {
    return Response.json({ errors }, { status: 422 });
  }

  const clean = sanitizeBooking(fields);

  const { error } = await supabaseAdmin.from("bookings").insert({
    first_name: clean.first_name,
    last_name: clean.last_name,
    email: clean.email,
    phone: clean.phone,
    restaurant_name: clean.restaurant_name,
    position: clean.position,
    meeting_date: clean.meeting_date,
    time_slot: clean.time_slot,
  });

  if (error) {
    console.error("[bookings] insert error:", error.code, error.message, error.details);
    if (error.code === "23505") {
      return Response.json(
        { error: "Ten termin jest już zajęty. Wybierz inną godzinę." },
        { status: 409 }
      );
    }
    return Response.json({ error: "Błąd serwera. Spróbuj ponownie." }, { status: 500 });
  }

  await sendBookingEmails(clean);

  return Response.json({ success: true }, { status: 201 });
}
