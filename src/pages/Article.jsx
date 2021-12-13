import { Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/Article.scss";
import { getNews, getBlogs } from "../utils/service";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: -100, opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: 100, opacity: 0 },
};

const Card = ({ article, index, type }) => {
  return (
    <motion.div
      className="card"
      variants={cardVariants}
      initial="rest"
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 * index, ...transition },
      }}
      exit="exit"
    >
      <a href={`/Post/${type}/${article.id}`} className="card__img">
        <motion.img
          src={article.image}
          alt={article.title}
          whileHover={{
            scale: 1.2,
            transition: { delay: 0.2, ...transition },
          }}
        />
      </a>
      <p className="card__category">{article.category.join(", ")}</p>
      <a href={`/Post/${type}/${article.id}`} className="card__title">
        <h2>{article.title}</h2>
      </a>
      <p className="card__date">{article.date}</p>
      <p className="card__preview">{article.content}</p>
      <a href={`/Post/${type}/${article.id}`}>Read more</a>
    </motion.div>
  );
};

const Article = ({ type }) => {
  const [article, setArticle] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    try {
      if (type === "news") {
        getNews().then((response) => {
          setArticle(response);
          setIsloaded(true);
        });
      } else if (type === "blogs") {
        getBlogs().then((response) => {
          setArticle(response);
          setIsloaded(true);
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="article">
        <Skeleton className="dummy-card" />
        <Skeleton className="dummy-card" />
        <Skeleton className="dummy-card" />
        <Skeleton className="dummy-card" />
      </div>
    );
  } else {
    return (
      <div className="article">
        {article.map((data, index) => (
          <Card article={data} key={index} index={index} type={type} />
        ))}
      </div>
    );
  }
};

export default Article;
