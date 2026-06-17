const { getProjects } = require("./githubHelper");

exports.handler = async () => {
  try {
    const { projects } = await getProjects();

    return {
      statusCode: 200,
      body: JSON.stringify(projects),
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
