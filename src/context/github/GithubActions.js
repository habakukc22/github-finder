import axios from "axios";
const url = process.env.REACT_APP_GITHUB_URL;
const token = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: url,
  headers: { Authorization: `token ${token}` },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);

  return response.data.items;
};

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
