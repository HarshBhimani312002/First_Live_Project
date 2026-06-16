const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const { id } = JSON.parse(event.body);

    const projectStore = getStore({
      name: "projects",
      siteID: "f2a7c388-5eb9-412b-a88a-080e9f2824ae",
      token: "nfp_mz4HHLhwRy68YXZWAVAemj2mpPob7cgfbd3c",
    });

    const imageStore = getStore({
      name: "images",
      siteID: "f2a7c388-5eb9-412b-a88a-080e9f2824ae",
      token: "nfp_mz4HHLhwRy68YXZWAVAemj2mpPob7cgfbd3c",
    });

    const projects =
      (await projectStore.get("projects", {
        type: "json",
      })) || [];

    const projectToDelete = projects.find(
      (project) => project.id === id
    );

    // Cover image delete
    if (projectToDelete?.coverImage) {
      const fileName =
        projectToDelete.coverImage.split("file=")[1];

      if (fileName) {
        await imageStore.delete(fileName);
      }
    }

    // Gallery images delete
    for (const image of projectToDelete?.gallery || []) {
      const fileName = image.split("file=")[1];

      if (fileName) {
        await imageStore.delete(fileName);
      }
    }

    const updatedProjects = projects.filter(
      (project) => project.id !== id
    );

    await projectStore.setJSON(
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