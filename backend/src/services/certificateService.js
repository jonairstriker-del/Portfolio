const supabase = require("../config/supabase");

async function getAllCertificates() {
  if (!supabase) return { data: [], error: null };
  return supabase
    .from("certificates")
    .select("*")
    .order("issued_date", { ascending: false });
}

module.exports = { getAllCertificates };
