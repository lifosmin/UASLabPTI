import axios from "axios";

const baseURL = "http://api-login-pti.herokuapp.com";
const header = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const getNews = async () => {
  const res = await axios.get("/data/news.json");
  return res.data;
};

export const getBlogs = async () => {
  const res = await axios.get("/data/blogs.json");
  return res.data;
};

export const getDeveloper = async () => {
  const res = await axios.get("/data/developer.json");
  return res.data;
};

export const login = async (email, password) => {
  const res = await axios.post(
    `${baseURL}/api/login_user`,
    {
      email: email,
      password: password,
    },
    { header: header }
  );
  return res.data;
};
