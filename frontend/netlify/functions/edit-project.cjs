const {
  getProjects,
  saveProjects,
  deleteGitHubFile,
} = require("./githubHelper");

exports.handler = async (event) => {
  try {
    const updatedProject = JSON.parse(event.body);

    console.log("removedImages:", updatedProject.removedImages);

    const { projects, sha } = await getProjects();

    const oldProject = projects.find(
      (project) => project.id === updatedProject.id,
    );

    // Delete removed gallery images
    for (const imageUrl of updatedProject.removedImages || []) {
      const imagePath = imageUrl.split("file=")[1];

      if (imagePath) {
        console.log("Deleting gallery image:", imagePath);

        await deleteGitHubFile(`images/${imagePath}`);
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

    await saveProjects(newProjects, sha);

    // Delete old cover image if changed
    if (
      oldProject?.coverImage &&
      oldProject.coverImage !== updatedProject.coverImage
    ) {
      const oldImagePath = oldProject.coverImage.split("file=")[1];

      if (oldImagePath) {
        console.log("Deleting old cover:", oldImagePath);

        await deleteGitHubFile(`images/${oldImagePath}`);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};
