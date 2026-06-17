const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const token = process.env.GITHUB_TOKEN;

exports.handler = async (event) => {
  try {
    const fileName = event.queryStringParameters.file;

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/images/${fileName}?ref=experiment`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!response.ok) {
      return {
        statusCode: 404,
        body: "Image not found",
      };
    }

    const file = await response.json();

    const imageBuffer = Buffer.from(file.content.replace(/\n/g, ""), "base64");

    let contentType = "image/jpeg";

    if (fileName.endsWith(".png")) {
      contentType = "image/png";
    } else if (fileName.endsWith(".webp")) {
      contentType = "image/webp";
    } else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
      contentType = "image/jpeg";
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000",
      },
      body: imageBuffer.toString("base64"),
      isBase64Encoded: true,
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
