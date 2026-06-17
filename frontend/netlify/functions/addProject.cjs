const { getProjects, saveProjects } = require("./githubHelper");

exports.handler = async (event) => {
  try {
    const newProject = JSON.parse(event.body);

    const { projects, sha } = await getProjects();

    projects.push(newProject);

    await saveProjects(projects, sha);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};
