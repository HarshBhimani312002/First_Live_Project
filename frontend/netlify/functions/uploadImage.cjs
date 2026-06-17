const sharp = require("sharp");

exports.handler = async (event) => {
  try {
    const { fileName, content } = JSON.parse(event.body);

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    const originalBuffer = Buffer.from(content, "base64");

    const compressedBuffer = await sharp(originalBuffer)
      .resize({
        width: 1920,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
      })
      .toBuffer();

    const webpFileName =
      fileName.substring(0, fileName.lastIndexOf(".")) + ".webp";

    const githubPath = `images/${webpFileName}`;

    const base64Content = compressedBuffer.toString("base64");

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${githubPath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
        body: JSON.stringify({
          message: `Upload ${webpFileName}`,
          content: base64Content,
          branch: "experiment",
        }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify(result));
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        fileName: webpFileName,
        imageUrl: `https://raw.githubusercontent.com/${owner}/${repo}/experiment/images/${webpFileName}`,
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
