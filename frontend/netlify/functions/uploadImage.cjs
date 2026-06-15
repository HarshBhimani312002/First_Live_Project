const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const { fileName, content } = JSON.parse(event.body);

    const store = getStore({
      name: "images",
      siteID: "f2a7c388-5eb9-412b-a88a-080e9f2824ae",
      token: "nfp_mz4HHLhwRy68YXZWAVAemj2mpPob7cgfbd3c"
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