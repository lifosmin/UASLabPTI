import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs, getNews } from "../utils/service";
import { motion } from "framer-motion";
import "../styles/Post.scss";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: -100, opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  rest: { y: 100, opacity: 0 },
};

const Post = () => {
  const { type, id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    document.title = "Post | Berita PTI";

    try {
      if (type.toLowerCase() === "news") {
        getNews().then((res) => setArticle(res));
      } else if (type.toLowerCase() === "blogs") {
        getBlogs().then((res) => setArticle(res));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const post = article.filter((data) => data.id == id)[0];
  console.log(post);

  if (post) {
    return (
      <motion.div
        className="post"
        variants={cardVariants}
        initial="rest"
        animate="enter"
        exit="exit"
      >
        <h1 className="post__title">{post.title}</h1>
        <h3 className="post__author">
          {post.author}, {post.date}
        </h3>
        <div className="post__img">
          <img src={post.image} alt="Article image" />
        </div>
        {post.content.map((data, index) => (
          <p className="post__content" key={index}>
            {data}
          </p>
        ))}
        <p className="post__cat">Category: {post.category.join(", ")}</p>
      </motion.div>
    );
  } else {
    return (
      <div>
        <h1>sekeleton</h1>
      </div>
    );
  }
};

export default Post;
