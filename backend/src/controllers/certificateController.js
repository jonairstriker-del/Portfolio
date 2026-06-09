const { getAllCertificates } = require("../services/certificateService");

async function getCertificates(req, res, next) {
  try {
    const { data, error } = await getAllCertificates();
    if (error) throw new Error(error.message);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

module.exports = { getCertificates };
