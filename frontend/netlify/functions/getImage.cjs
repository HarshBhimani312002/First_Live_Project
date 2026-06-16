const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const fileName =
      event.queryStringParameters.file;

    const store = getStore({
      name: "images",
      siteID: process.env.NETLIFY_SITE_ID,
      token: "process.env.NETLIFY_TOKEN"
    });

    const image = await store.get(fileName, {
      type: "arrayBuffer",
    });

    if (!image) {
      return {
        statusCode: 404,
        body: "Image not found",
      };
    }

    let contentType = "image/jpeg";

    if (fileName.endsWith(".png")) {
      contentType = "image/png";
    } else if (fileName.endsWith(".webp")) {
      contentType = "image/webp";
    } else if (
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".jpeg")
    ) {
      contentType = "image/jpeg";
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000",
      },
      body: Buffer.from(image).toString("base64"),
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