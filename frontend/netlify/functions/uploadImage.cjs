const { getStore } = require("@netlify/blobs");
const sharp = require("sharp");

exports.handler = async (event) => {
  try {
    const { fileName, content } = JSON.parse(event.body);

    const originalBuffer = Buffer.from(content, "base64");

    // Compress + Convert to WebP
    const compressedBuffer = await sharp(originalBuffer)
      .resize({
        width: 1920,
        withoutEnlargement: true
      })
      .webp({
        quality: 80
      })
      .toBuffer();

    const webpFileName =
      fileName.substring(0, fileName.lastIndexOf(".")) + ".webp";

    const store = getStore({
      name: "images",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_TOKEN
    });

    await store.set(webpFileName, compressedBuffer);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        fileName: webpFileName
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