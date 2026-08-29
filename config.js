// Configuration de connexion à Supabase
const SUPABASE_URL = "https://tfhyolovvxdgzwufrkjo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_AUkGRnYNzklrqsk_RPMeGA_6xeXRzw0";

// Initialisation du client Supabase
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
