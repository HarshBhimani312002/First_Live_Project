exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
      tokenExists: !!process.env.GITHUB_TOKEN
    })
  };
};