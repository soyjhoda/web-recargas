import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://alkzivgbqbdhvyvswfnr.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "tu_clave_de_respaldo";

export const supabase = createClient(supabaseUrl, supabaseKey);
