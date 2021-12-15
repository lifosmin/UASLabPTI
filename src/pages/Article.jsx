import { Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getNews, getBlogs } from "../utils/service";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "../styles/Article.scss";

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
      <div className="readmore">
        <a className="readmore__link" href={`/Post/${type}/${article.id}`}>
          Read more...
        </a>
      </div>
    </motion.div>
  );
};

const Article = ({ type }) => {
  const [article, setArticle] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    document.title = `${type === "news" ? "News" : "Blogs"} List | Berita PTI`;

    const fetchData = async () => {
      try {
        let response;
        if (type === "news") {
          response = await getNews();
        } else if (type === "blogs") {
          response = await getBlogs();
        }
        setArticle(response);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "ERROR!",
          text: error,
        });
      } finally {
        setIsloaded(true);
      }
    };

    fetchData();
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
