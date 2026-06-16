const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const { id } = JSON.parse(event.body);

    const projectStore = getStore({
      name: "projects",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_TOKEN,
    });

    const imageStore = getStore({
      name: "images",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_TOKEN,
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