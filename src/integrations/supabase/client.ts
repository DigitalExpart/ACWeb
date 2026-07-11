import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://api.anesthesiaconnect.net';
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_PUBLISHABLE_KEY) {
  throw new Error(
    'Missing required environment variable: VITE_SUPABASE_ANON_KEY\n' +
      'Copy .env.example to .env and set VITE_SUPABASE_ANON_KEY.'
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
});

export { SUPABASE_URL };
