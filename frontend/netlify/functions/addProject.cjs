const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const store = getStore({
      name: "projects",
      siteID: process.env.NETLIFY_SITE_ID,
      token: "process.env.NETLIFY_TOKEN"
    });

    const newProject = JSON.parse(event.body);

    const projects =
      (await store.get("projects", {
        type: "json",
      })) || [];

    projects.push(newProject);

    await store.setJSON(
      "projects",
      projects
    );

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