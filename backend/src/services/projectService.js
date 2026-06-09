const supabase = require("../config/supabase");

async function getAllProjects() {
  if (!supabase) return { data: [], error: null };
  return supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
}

async function getProjectById(id) {
  if (!supabase) return { data: null, error: null };
  return supabase.from("projects").select("*").eq("id", id).single();
}

module.exports = { getAllProjects, getProjectById };
