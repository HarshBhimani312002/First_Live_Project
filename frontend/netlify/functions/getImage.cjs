const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const fileName =
      event.queryStringParameters.file;

    const store = getStore({
      name: "images",
      siteID: "f2a7c388-5eb9-412b-a88a-080e9f2824ae",
      token: "nfp_mz4HHLhwRy68YXZWAVAemj2mpPob7cgfbd3c"
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