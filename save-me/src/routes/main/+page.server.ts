import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("tools").select();
  return {
    tools: data ?? [],
  }
}