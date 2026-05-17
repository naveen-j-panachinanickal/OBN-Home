import { createClient } from "@supabase/supabase-js";

// Read Supabase credentials from local environment variables (.env.local)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Initialize Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Returns true if the Supabase environment variables have been set.
 * Enables clean fallback to offline local mock mode if they are missing.
 */
export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl) && Boolean(supabaseAnonKey);
};
