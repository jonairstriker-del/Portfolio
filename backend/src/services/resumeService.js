const supabase = require("../config/supabase");

const BUCKET = "resume-files";
const FILE_NAME = "resume.pdf";

async function getResumeDownloadUrl() {
  if (!supabase) {
    return { data: null, error: new Error("Supabase not configured") };
  }

  const { data, error } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(FILE_NAME);

  return { data, error };
}

module.exports = { getResumeDownloadUrl };
