const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const token = process.env.GITHUB_TOKEN;

async function getProjects() {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/data/projects.json?ref=experiment`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  const file = await response.json();

  const content = Buffer.from(
    file.content,
    "base64"
  )
    .toString("utf8")
    .replace(/^\uFEFF/, "")
    .trim();

  return {
    projects: JSON.parse(content || "[]"),
    sha: file.sha,
  };
}

async function saveProjects(projects, sha) {
  const content = Buffer.from(
    JSON.stringify(projects, null, 2)
  ).toString("base64");

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/data/projects.json`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        message: "Update projects.json",
        content,
        sha,
        branch: "experiment",
      }),
    }
  );

  return response.json();
}

async function deleteGitHubFile(filePath) {
  const fileResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=experiment`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  const file = await fileResponse.json();

  if (!file.sha) {
    return;
  }

  await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        message: `Delete ${filePath}`,
        sha: file.sha,
        branch: "experiment",
      }),
    }
  );
}

module.exports = {
  getProjects,
  saveProjects,
  deleteGitHubFile,
};