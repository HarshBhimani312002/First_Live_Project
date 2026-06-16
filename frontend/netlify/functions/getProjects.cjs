const { getStore } = require("@netlify/blobs");

exports.handler = async () => {
  try {
    const store = getStore({
      name: "projects",
      siteID: process.env.NETLIFY_SITE_ID,
      token: "process.env.NETLIFY_TOKEN"
    });

    const projects = await store.get("projects", {
      type: "json"
    });

    return {
      statusCode: 200,
      body: JSON.stringify(projects || [])
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