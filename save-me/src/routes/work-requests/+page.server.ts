import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data, error } = await supabase.from("work_requests").select("*");
  
  if (error) {
    console.error('Error:', error);
    return {
      work_requests: []
    };
  }

  return {
    work_requests: data ?? []
  };
}
