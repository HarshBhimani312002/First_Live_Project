const {
  getProjects,
  saveProjects,
  deleteGitHubFile,
} = require("./githubHelper");

exports.handler = async (event) => {
  try {
    const { id } = JSON.parse(event.body);

    const { projects, sha } = await getProjects();

    const projectToDelete = projects.find((project) => project.id === id);

    if (!projectToDelete) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: "Project not found",
        }),
      };
    }

    // Delete cover image from GitHub
    if (projectToDelete.coverImage) {
      const imagePath = projectToDelete.coverImage.split("file=")[1];

      if (imagePath) {
        console.log("Deleting cover image:", `images/${imagePath}`);

        await deleteGitHubFile(`images/${imagePath}`);
      }
    }

    // Delete gallery images from GitHub
    for (const imageUrl of projectToDelete.gallery || []) {
      const imagePath = imageUrl.split("file=")[1];

      if (imagePath) {
        console.log("Deleting gallery image:", `images/${imagePath}`);

        await deleteGitHubFile(`images/${imagePath}`);
      }
    }

    // Remove project from projects.json
    const updatedProjects = projects.filter((project) => project.id !== id);

    await saveProjects(updatedProjects, sha);

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
