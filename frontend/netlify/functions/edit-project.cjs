const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const updatedProject = JSON.parse(event.body);

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

    const oldProject = projects.find(
      (project) => project.id === updatedProject.id,
    );

    // Removed gallery images delete
    for (const imageUrl of updatedProject.removedImages || []) {
      const fileName = imageUrl.split("file=")[1];

      if (fileName) {
        await imageStore.delete(fileName);
      }
    }

    const newProjects = projects.map((project) =>
      project.id === updatedProject.id
        ? {
            ...project,
            name: updatedProject.name,
            coverImage: updatedProject.coverImage,
            gallery: updatedProject.gallery,
          }
        : project,
    );

    await projectStore.setJSON("projects", newProjects);

    // Cover image change થઈ હોય તો જૂની image delete
    if (
      oldProject?.coverImage &&
      oldProject.coverImage !== updatedProject.coverImage
    ) {
      const oldFileName = oldProject.coverImage.split("file=")[1];

      if (oldFileName) {
        await imageStore.delete(oldFileName);
      }
    }

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
