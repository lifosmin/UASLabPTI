import axios from "axios";

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

export const validateAuth = () => {
  const data = JSON.parse(localStorage.getItem("logData"));
  if (data !== null) return true;
  else return false;
};
