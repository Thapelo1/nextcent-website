const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const [repositoryOwner, repositoryName] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const basePath =
  isGitHubPagesBuild && repositoryName !== `${repositoryOwner}.github.io`
    ? `/${repositoryName}`
    : "";

const nextConfig = {
  ...(isGitHubPagesBuild && {
    output: "export",
    basePath,
    images: { unoptimized: true },
  }),
  trailingSlash: true,
};

export default nextConfig;
