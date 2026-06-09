const { createClient } = require("@supabase/supabase-js");
const config = require("./env");

function isValidUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

const isConfigured =
  config.supabaseUrl &&
  config.supabaseServiceKey &&
  isValidUrl(config.supabaseUrl) &&
  !config.supabaseUrl.includes("your_supabase");

if (!isConfigured) {
  console.warn(
    "[Supabase] Not configured — running in mock mode. Fill in SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in backend/.env"
  );
}

const supabase = isConfigured
  ? createClient(config.supabaseUrl, config.supabaseServiceKey)
  : null;

module.exports = supabase;
