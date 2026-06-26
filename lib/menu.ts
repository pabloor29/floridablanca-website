import "server-only";
import { createClient } from "@supabase/supabase-js";

export type MenuFile = {
  id: string;
  file_path: string;
  position: number;
};

export type MenuCategory = {
  id: string;
  name: string;
  position: number;
  files: MenuFile[];
};

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    global: {
      fetch: (u, options) => fetch(u, { ...options, cache: "no-store" }),
    },
  });
}

export async function getMenuData(): Promise<MenuCategory[]> {
  const supabase = getSupabase();
  const restaurantId = process.env.RESTAURANT_ID;
  if (!supabase || !restaurantId) return [];

  const { data: categories } = await supabase
    .from("menu_categories")
    .select("id, name, position")
    .eq("restaurant_id", restaurantId)
    .order("position");

  if (!categories || categories.length === 0) return [];

  const { data: files } = await supabase
    .from("menu_files")
    .select("id, category_id, file_path, position")
    .eq("restaurant_id", restaurantId)
    .order("position");

  return categories.map((cat) => ({
    ...cat,
    files: (files || [])
      .filter((f: { category_id: string }) => f.category_id === cat.id)
      .sort((a: { position: number }, b: { position: number }) => a.position - b.position),
  }));
}

export function getMenuFileUrl(filePath: string): string {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/menus/${filePath}`;
}
