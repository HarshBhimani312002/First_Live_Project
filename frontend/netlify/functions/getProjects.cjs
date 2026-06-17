const { getProjects } = require("./githubHelper");

exports.handler = async () => {
  try {
    const data = await getProjects();

    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
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