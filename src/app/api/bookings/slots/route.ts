import { NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { generateTimeSlots } from "@/lib/validation";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date");

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json({ error: "Nieprawidłowa data" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .select("time_slot")
    .eq("meeting_date", date)
    .in("status", ["pending", "confirmed"]);

  if (error) {
    return Response.json({ error: "Błąd serwera" }, { status: 500 });
  }

  const bookedSlots = data.map((b) => b.time_slot);
  const allSlots = generateTimeSlots();

  return Response.json({
    all: allSlots,
    booked: bookedSlots,
  });
}
