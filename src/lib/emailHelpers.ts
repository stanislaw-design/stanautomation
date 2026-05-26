const PL_MONTHS = [
  "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
  "lipca", "sierpnia", "września", "października", "listopada", "grudnia",
];

const PL_DAYS = [
  "niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota",
];

export function formatDatePL(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const dayName = PL_DAYS[date.getUTCDay()];
  return `${dayName}, ${day} ${PL_MONTHS[month - 1]} ${year}`;
}

export function buildGoogleCalendarUrl(
  meeting_date: string,
  time_slot: string,
  restaurant: string
): string {
  const dateStr = meeting_date.replace(/-/g, "");
  const [h, m] = time_slot.split(":").map(Number);
  const endH = m === 30 ? h + 1 : h;
  const endM = m === 30 ? 0 : 30;
  const pad = (n: number) => String(n).padStart(2, "0");
  const start = `${dateStr}T${pad(h)}${pad(m)}00`;
  const end = `${dateStr}T${pad(endH)}${pad(endM)}00`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Spotkanie ze StanAutomation",
    dates: `${start}/${end}`,
    ctz: "Europe/Warsaw",
    details: `Spotkanie z zespołem StanAutomation dotyczące strony internetowej dla restauracji ${restaurant}.`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function getWarsawUtcOffset(dateStr: string): number {
  const month = parseInt(dateStr.split("-")[1]);
  return month >= 4 && month <= 10 ? 2 : 1;
}

export function getMeetingUTC(meeting_date: string, time_slot: string): Date {
  const offset = getWarsawUtcOffset(meeting_date);
  const [hours, minutes] = time_slot.split(":").map(Number);
  const pad = (n: number) => String(n).padStart(2, "0");
  return new Date(
    `${meeting_date}T${pad(hours - offset)}:${pad(minutes)}:00.000Z`
  );
}

export function getScheduledAt24h(meeting_date: string): string {
  const [year, month, day] = meeting_date.split("-").map(Number);
  const prevDay = new Date(Date.UTC(year, month - 1, day - 1));
  const prevDateStr = prevDay.toISOString().split("T")[0];
  const offset = getWarsawUtcOffset(prevDateStr);
  const utcHour = 9 - offset;
  return `${prevDateStr}T${String(utcHour).padStart(2, "0")}:00:00.000Z`;
}

export function getScheduledAt1h(meeting_date: string, time_slot: string): string {
  const meetingUTC = getMeetingUTC(meeting_date, time_slot);
  return new Date(meetingUTC.getTime() - 60 * 60 * 1000).toISOString();
}
