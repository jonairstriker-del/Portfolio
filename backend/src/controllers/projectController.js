const { getAllProjects, getProjectById } = require("../services/projectService");

async function getProjects(req, res, next) {
  try {
    const { data, error } = await getAllProjects();
    if (error) throw new Error(error.message);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

async function getProject(req, res, next) {
  try {
    const { id } = req.params;
    const { data, error } = await getProjectById(id);
    if (error) throw new Error(error.message);
    if (!data) {
      const notFound = new Error("Project not found");
      notFound.status = 404;
      throw notFound;
    }
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProjects, getProject };
