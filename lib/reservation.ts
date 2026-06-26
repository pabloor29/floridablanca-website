import "server-only";
import { createClient } from "@supabase/supabase-js";
import { DayHours } from "./opening-hours";

export type ReservationConfig = {
  closedWeekdays: number[];
  closedDates: string[];
  holidayPeriods: { debut: string; fin: string }[];
  timeSlots: string[];
  lunchSlots: string[];
  dinnerSlots: string[];
};

const DAYS_FR_TO_JS: Record<number, number> = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 0,
};

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60).toString().padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

function generateSlots(debut: string, fin: string, stepMinutes = 30): string[] {
  const slots: string[] = [];
  const start = timeToMinutes(debut);
  const end = timeToMinutes(fin);
  for (let t = start; t <= end; t += stepMinutes) {
    slots.push(minutesToTime(t));
  }
  return slots;
}

function normalizeTime(t: string): string {
  return t.slice(0, 5);
}

type ScheduleRow = {
  midi_active: boolean;
  midi_debut: string | null;
  midi_fin: string | null;
  soir_active: boolean;
  soir_debut: string | null;
  soir_fin: string | null;
  interval_minutes: number | null;
};

export async function getReservationConfig(): Promise<ReservationConfig> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { global: { fetch: (url, opts) => fetch(url, { ...opts, cache: "no-store" }) } }
  );

  const restaurantId = process.env.RESTAURANT_ID!;

  const [hoursResult, closedDaysResult, holidaysResult, scheduleResult] = await Promise.all([
    supabase.from("opening_hours").select("hours").eq("restaurant_id", restaurantId).single(),
    supabase.from("closed_days").select("days").eq("restaurant_id", restaurantId).single(),
    supabase.from("holidays").select("periods").eq("restaurant_id", restaurantId).single(),
    supabase
      .from("reservation_schedule")
      .select("midi_active, midi_debut, midi_fin, soir_active, soir_debut, soir_fin, interval_minutes")
      .eq("restaurant_id", restaurantId)
      .maybeSingle(),
  ]);

  const hours: DayHours[] | null = hoursResult.data?.hours ?? null;
  const closedDates: string[] = closedDaysResult.data?.days ?? [];
  const holidayPeriods: { debut: string; fin: string }[] = holidaysResult.data?.periods ?? [];
  const schedule: ScheduleRow | null = (scheduleResult.data as ScheduleRow | null) ?? null;

  const closedWeekdays: number[] = [];
  if (hours) {
    hours.forEach((day, index) => {
      if (day.closedDay) closedWeekdays.push(DAYS_FR_TO_JS[index]);
    });
  }

  const step = schedule?.interval_minutes ?? 30;
  const lunchSlots: string[] =
    schedule?.midi_active && schedule.midi_debut && schedule.midi_fin
      ? generateSlots(normalizeTime(schedule.midi_debut), normalizeTime(schedule.midi_fin), step)
      : [];
  const dinnerSlots: string[] =
    schedule?.soir_active && schedule.soir_debut && schedule.soir_fin
      ? generateSlots(normalizeTime(schedule.soir_debut), normalizeTime(schedule.soir_fin), step)
      : [];
  const timeSlots = Array.from(new Set([...lunchSlots, ...dinnerSlots])).sort();

  return { closedWeekdays, closedDates, holidayPeriods, timeSlots, lunchSlots, dinnerSlots };
}
