import axios from "axios";
import jwt from "jsonwebtoken";

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
  // Asumsikan ini fungsi buat login lewat API :D

  for (let i = 0; i < accoutList.length; i++) {
    if (email === accoutList[i].email && password === accoutList[i].password) {
      const resData = {
        userID: accoutList[i].id,
        username: accoutList[i].username,
        userEmail: accoutList[i].email,
        accLevel: accoutList[i].accLevel,
      };
      const response = jwt.sign(resData, secretKey, { expiresIn: "1h" });
      return response;
    }
  }
};

export const authCheckStatus = () => {
  // Asumsikan ini fungsi buat check login lewat API :D

  const token = localStorage.getItem("beritapti_token");
  if (token) {
    try {
      jwt.verify(token, secretKey);
      return {
        status: true,
        message: "Your token is valid",
      };
    } catch (error) {
      return {
        status: false,
        message: "Your token has expired, please re-login",
      };
    }
  } else
    return {
      status: false,
      message: "You must login first to access this page!",
    };
};

const secretKey = "!)*@$&%?>@$&*Anj4YGu4Gant3EN68ANgeT:3**)!>";

const accoutList = [
  {
    id: 0,
    username: "Bonifasius Ariesto Adrian Finantyo",
    email: "bonifasius.finantyo@student.umn.ac.id",
    password: "12345678",
    accLevel: "Admin",
  },
  {
    id: 1,
    username: "Admin Berita PTI",
    email: "admin@beritapti.umn.ac.id",
    password: "12345678",
    accLevel: "Admin",
  },
];
