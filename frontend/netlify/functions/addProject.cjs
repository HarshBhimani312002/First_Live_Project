const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const store = getStore({
      name: "projects",
      siteID: "f2a7c388-5eb9-412b-a88a-080e9f2824ae",
      token: "nfp_mz4HHLhwRy68YXZWAVAemj2mpPob7cgfbd3c"
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