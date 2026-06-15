const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const { id } = JSON.parse(event.body);

    const store = getStore({
      name: "projects",
      siteID: "f2a7c388-5eb9-412b-a88a-080e9f2824ae",
      token: "nfp_mz4HHLhwRy68YXZWAVAemj2mpPob7cgfbd3c"
    });

    const projects =
      (await store.get("projects", {
        type: "json",
      })) || [];

    const updatedProjects =
      projects.filter(
        (project) => project.id !== id
      );

    await store.setJSON(
      "projects",
      updatedProjects
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