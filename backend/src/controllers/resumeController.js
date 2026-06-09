const { getResumeDownloadUrl } = require("../services/resumeService");

async function downloadResume(req, res, next) {
  try {
    const { data, error } = await getResumeDownloadUrl();
    if (error) {
      const err = new Error("Resume not available at this time");
      err.status = 503;
      throw err;
    }
    res.json({ success: true, url: data.publicUrl });
  } catch (err) {
    next(err);
  }
}

module.exports = { downloadResume };
