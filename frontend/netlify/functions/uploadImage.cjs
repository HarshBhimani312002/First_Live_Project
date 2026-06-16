const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const { fileName, content } = JSON.parse(event.body);

    const store = getStore({
      name: "images",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_TOKEN
    });

    await store.set(
      fileName,
      Buffer.from(content, "base64")
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        fileName
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message
      })
    };
  }
};