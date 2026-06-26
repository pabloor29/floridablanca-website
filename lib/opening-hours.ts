import "server-only";
import { createClient } from "@supabase/supabase-js";

export type DayHours = {
  midi: { debut: string; fin: string };
  soir: { debut: string; fin: string };
  closedDay: boolean;
  closedDiner: boolean;
  closedLunch: boolean;
};

export const DAYS_FR = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export async function getOpeningHours(): Promise<DayHours[] | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const restaurantId = process.env.RESTAURANT_ID;
  if (!url || !key || !restaurantId) return null;

  const supabase = createClient(url, key, {
    global: {
      fetch: (u, options) => fetch(u, { ...options, cache: "no-store" }),
    },
  });

  const { data, error } = await supabase
    .from("opening_hours")
    .select("hours")
    .eq("restaurant_id", restaurantId)
    .single();

  if (error || !data) return null;
  return data.hours as DayHours[];
}
