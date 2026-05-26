const ALLOWED_POSITIONS = ["Właściciel", "Manager", "Inny"] as const;
export type Position = (typeof ALLOWED_POSITIONS)[number];

export interface BookingFields {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  restaurant_name: string;
  position: string;
  meeting_date: string;
  time_slot: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

function sanitize(value: string): string {
  return value
    .trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPolishPhone(phone: string): boolean {
  const normalized = phone.replace(/[\s\-]/g, "");
  return /^(\+48)?[0-9]{9}$/.test(normalized);
}

function isValidDate(date: string): boolean {
  const d = new Date(date);
  if (isNaN(d.getTime())) return false;
  const day = d.getUTCDay();
  return day !== 0 && day !== 6;
}

function isValidTimeSlot(slot: string): boolean {
  const slots = generateTimeSlots();
  return slots.includes(slot);
}

export function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let hour = 13; hour < 20; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
}

export function validateBooking(data: BookingFields): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.first_name || data.first_name.trim().length < 2) {
    errors.push({ field: "first_name", message: "Imię jest wymagane" });
  }
  if (!data.last_name || data.last_name.trim().length < 2) {
    errors.push({ field: "last_name", message: "Nazwisko jest wymagane" });
  }
  if (!data.email || !isValidEmail(data.email)) {
    errors.push({ field: "email", message: "Podaj poprawny adres email" });
  }
  if (!data.phone || !isValidPolishPhone(data.phone)) {
    errors.push({
      field: "phone",
      message: "Podaj poprawny numer telefonu (9 cyfr)",
    });
  }
  if (!data.restaurant_name || data.restaurant_name.trim().length < 2) {
    errors.push({
      field: "restaurant_name",
      message: "Nazwa restauracji jest wymagana",
    });
  }
  if (!ALLOWED_POSITIONS.includes(data.position as Position)) {
    errors.push({ field: "position", message: "Wybierz stanowisko z listy" });
  }
  if (!data.meeting_date || !isValidDate(data.meeting_date)) {
    errors.push({
      field: "meeting_date",
      message: "Wybierz dzień roboczy (pon–pt)",
    });
  }
  if (!data.time_slot || !isValidTimeSlot(data.time_slot)) {
    errors.push({ field: "time_slot", message: "Wybierz godzinę spotkania" });
  }

  return errors;
}

export function sanitizeBooking(data: BookingFields): BookingFields {
  return {
    first_name: sanitize(data.first_name),
    last_name: sanitize(data.last_name),
    email: sanitize(data.email).toLowerCase(),
    phone: sanitize(data.phone),
    restaurant_name: sanitize(data.restaurant_name),
    position: sanitize(data.position),
    meeting_date: sanitize(data.meeting_date),
    time_slot: sanitize(data.time_slot),
  };
}
