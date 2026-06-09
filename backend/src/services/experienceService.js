const supabase = require("../config/supabase");

async function getAllExperiences() {
  if (!supabase) return { data: [], error: null };
  return supabase
    .from("experiences")
    .select("*")
    .order("start_date", { ascending: false });
}

module.exports = { getAllExperiences };
