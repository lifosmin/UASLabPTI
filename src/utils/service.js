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

export const authLogin = (email, password) => {
  // Asumsikan ini fungsi buat login lewat API
  for (let i = 0; i < accoutList.length; i++) {
    if (email === accoutList[i].email && password === accoutList[i].password) {
      return JSON.stringify(accoutList[i]);
    }
  }
};

const accoutList = [
  {
    email: "bonifasius.finantyo@student.umn.ac.id",
    password: "12345678",
  },
  {
    email: "admin@beritapti.umn.ac.id",
    password: "12345678",
  },
];

export const authCheckStatus = () => {
  // Asumsikan ini fungsi buat check login lewat API
  const token = localStorage.getItem("token");
  if (token !== null) return true;
  else return false;
};
