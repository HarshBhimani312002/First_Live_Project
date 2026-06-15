const { getStore } = require("@netlify/blobs");

exports.handler = async () => {
  try {
    const store = getStore({
      name: "projects",
      siteID: "f2a7c388-5eb9-412b-a88a-080e9f2824ae",
      token: "nfp_mz4HHLhwRy68YXZWAVAemj2mpPob7cgfbd3c"
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