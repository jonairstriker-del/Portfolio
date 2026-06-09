const { getAllExperiences } = require("../services/experienceService");

async function getExperiences(req, res, next) {
  try {
    const { data, error } = await getAllExperiences();
    if (error) throw new Error(error.message);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

module.exports = { getExperiences };
