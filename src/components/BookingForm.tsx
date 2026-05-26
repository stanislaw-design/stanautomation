"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DayPicker } from "react-day-picker";
import { pl } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { generateTimeSlots } from "@/lib/validation";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  restaurant_name: string;
  position: string;
  meeting_date: string;
  time_slot: string;
}

interface FieldErrors {
  [key: string]: string;
}

const EMPTY_FORM: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  restaurant_name: "",
  position: "",
  meeting_date: "",
  time_slot: "",
};

function toISODate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function formatDatePL(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}.${month}.${year}`;
}

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function getMinDate(): Date {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  while (isWeekend(tomorrow)) {
    tomorrow.setDate(tomorrow.getDate() + 1);
  }
  return tomorrow;
}

export default function BookingForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!form.meeting_date) return;
    setLoadingSlots(true);
    setForm((prev) => ({ ...prev, time_slot: "" }));

    fetch(`/api/bookings/slots?date=${form.meeting_date}`)
      .then((r) => r.json())
      .then((data) => setBookedSlots(data.booked ?? []))
      .catch(() => setBookedSlots([]))
      .finally(() => setLoadingSlots(false));
  }, [form.meeting_date]);

  function setField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    setSubmitting(true);

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.status === 201) {
      router.push("/potwierdzenie");
      return;
    }

    const data = await res.json();
    setSubmitting(false);

    if (res.status === 422 && data.errors) {
      const errs: FieldErrors = {};
      for (const err of data.errors) {
        errs[err.field] = err.message;
      }
      setFieldErrors(errs);
      return;
    }

    setServerError(data.error ?? "Wystąpił błąd. Spróbuj ponownie.");
  }

  const allSlots = generateTimeSlots();
  const minDate = getMinDate();

  const inputClass =
    "w-full bg-[#f5fbff] border border-[#c8e9f7] rounded-xl px-4 py-3 text-[#00171f] text-sm font-[family-name:var(--font-inter)] placeholder:text-[#003459]/40 focus:outline-none focus:border-[#1d4ed8] focus:ring-1 focus:ring-[#1d4ed8]/30 transition-colors";
  const errorClass = "border-red-400 focus:border-red-400 focus:ring-red-200";
  const labelClass =
    "block text-xs font-semibold text-[#003459]/60 uppercase tracking-wider mb-1.5 font-[family-name:var(--font-inter)]";
  const errorMsgClass = "mt-1 text-xs text-red-500 font-[family-name:var(--font-inter)]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Imię + Nazwisko */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Imię</label>
          <input
            type="text"
            value={form.first_name}
            onChange={(e) => setField("first_name", e.target.value)}
            placeholder="Jan"
            className={`${inputClass} ${fieldErrors.first_name ? errorClass : ""}`}
          />
          {fieldErrors.first_name && (
            <p className={errorMsgClass}>{fieldErrors.first_name}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Nazwisko</label>
          <input
            type="text"
            value={form.last_name}
            onChange={(e) => setField("last_name", e.target.value)}
            placeholder="Kowalski"
            className={`${inputClass} ${fieldErrors.last_name ? errorClass : ""}`}
          />
          {fieldErrors.last_name && (
            <p className={errorMsgClass}>{fieldErrors.last_name}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          placeholder="jan@restauracja.pl"
          className={`${inputClass} ${fieldErrors.email ? errorClass : ""}`}
        />
        {fieldErrors.email && (
          <p className={errorMsgClass}>{fieldErrors.email}</p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <label className={labelClass}>Telefon</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setField("phone", e.target.value)}
          placeholder="500 000 000"
          className={`${inputClass} ${fieldErrors.phone ? errorClass : ""}`}
        />
        {fieldErrors.phone && (
          <p className={errorMsgClass}>{fieldErrors.phone}</p>
        )}
      </div>

      {/* Restauracja */}
      <div>
        <label className={labelClass}>Nazwa restauracji</label>
        <input
          type="text"
          value={form.restaurant_name}
          onChange={(e) => setField("restaurant_name", e.target.value)}
          placeholder="Restauracja Morska"
          className={`${inputClass} ${fieldErrors.restaurant_name ? errorClass : ""}`}
        />
        {fieldErrors.restaurant_name && (
          <p className={errorMsgClass}>{fieldErrors.restaurant_name}</p>
        )}
      </div>

      {/* Stanowisko */}
      <div>
        <label className={labelClass}>Stanowisko</label>
        <select
          value={form.position}
          onChange={(e) => setField("position", e.target.value)}
          className={`${inputClass} cursor-pointer ${fieldErrors.position ? errorClass : ""}`}
        >
          <option value="">Wybierz stanowisko</option>
          <option value="Właściciel">Właściciel</option>
          <option value="Manager">Manager</option>
          <option value="Inny">Inny</option>
        </select>
        {fieldErrors.position && (
          <p className={errorMsgClass}>{fieldErrors.position}</p>
        )}
      </div>

      {/* Kalendarz */}
      <div>
        <label className={labelClass}>Data spotkania</label>
        <div
          className={`bg-[#f5fbff] border rounded-xl p-3 ${
            fieldErrors.meeting_date ? "border-red-400" : "border-[#c8e9f7]"
          }`}
        >
          <DayPicker
            mode="single"
            locale={pl}
            selected={form.meeting_date ? new Date(form.meeting_date + "T12:00:00") : undefined}
            onSelect={(date) => setField("meeting_date", date ? toISODate(date) : "")}
            disabled={[{ dayOfWeek: [0, 6] }, { before: minDate }]}
            startMonth={minDate}
            classNames={{
              root: "!font-[family-name:var(--font-inter)]",
              month_caption: "text-sm font-semibold text-[#00171f] mb-2",
              weekday: "text-xs text-[#003459]/40 font-medium",
              day_button:
                "w-8 h-8 rounded-lg text-sm text-[#00171f] hover:bg-[#1d4ed8]/10 transition-colors",
              selected:
                "!bg-[#1d4ed8] !text-white rounded-lg font-semibold",
              disabled: "opacity-30 cursor-not-allowed",
              today: "font-bold text-[#1d4ed8]",
              outside: "opacity-20",
              nav: "text-[#1d4ed8]",
            }}
          />
        </div>
        {fieldErrors.meeting_date && (
          <p className={errorMsgClass}>{fieldErrors.meeting_date}</p>
        )}
      </div>

      {/* Sloty godzinowe */}
      {form.meeting_date && (
        <div>
          <label className={labelClass}>
            Godzina — {formatDatePL(form.meeting_date)}
          </label>
          {loadingSlots ? (
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 rounded-xl bg-[#f5fbff] border border-[#c8e9f7] animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2">
              {allSlots.map((slot) => {
                const isBooked = bookedSlots.includes(slot);
                const isSelected = form.time_slot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isBooked}
                    onClick={() => setField("time_slot", slot)}
                    className={`
                      h-10 rounded-xl text-sm font-medium font-[family-name:var(--font-inter)]
                      border transition-all duration-150
                      ${
                        isBooked
                          ? "bg-[#f5fbff] border-[#c8e9f7] text-[#003459]/25 cursor-not-allowed line-through"
                          : isSelected
                          ? "bg-[#1d4ed8] border-[#1d4ed8] text-white shadow-md shadow-[#1d4ed8]/25"
                          : "bg-[#f5fbff] border-[#c8e9f7] text-[#003459] hover:border-[#1d4ed8] hover:text-[#1d4ed8]"
                      }
                    `}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          )}
          {fieldErrors.time_slot && (
            <p className={errorMsgClass}>{fieldErrors.time_slot}</p>
          )}
        </div>
      )}

      {/* Server error */}
      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-[family-name:var(--font-inter)]">
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm py-4 rounded-xl transition-colors duration-150 font-[family-name:var(--font-inter)] shadow-lg shadow-[#1d4ed8]/25"
      >
        {submitting ? "Wysyłanie..." : "Umów spotkanie"}
      </button>
    </form>
  );
}
