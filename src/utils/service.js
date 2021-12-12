import axios from "axios";

export const getNews = async () => {
  const res = await axios.get("/news.json");
  return res.data;
};

export const getBlogs = async () => {
  const res = await axios.get("/news.json");
  return res.data;
};

export const getDeveloper = async () => {
  const res = await axios.get("/developer.json");
  return res.data;
};
