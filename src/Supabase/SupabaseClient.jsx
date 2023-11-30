import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be provided.");
}

let supabase;

try {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} catch (error) {
  console.error("Error initializing Supabase client:", error);
}



export default supabase;