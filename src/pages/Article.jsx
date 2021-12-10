import React, { useEffect, useState } from "react";
import "../styles/Article.scss";
import { getNews, getBlogs } from "../utils/service";

const Card = ({ article }) => {
  return (
    <div className="card">
      <a href="/awdawd" className="card__img">
        <img src={article.image} alt="" />
      </a>
      <p className="card__category">{article.category.join(", ")}</p>
      <a href="#" className="card__title">
        <h2>{article.title}</h2>
      </a>
      <p className="card__date">{article.date}</p>
      <p className="card__preview">
        {article.content.substring(0, 150) + "... "}
        <a href="">Read more</a>
      </p>
    </div>
  );
};

const Article = ({ type }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    try {
      if (type === "news") {
        getNews().then((response) => setArticle(response));
      } else if (type === "blogs") {
        getBlogs().then((response) => setArticle(response));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="article">
      {article.map((data, index) => (
        <Card article={data} key={index} />
      ))}
    </div>
  );
};

export default Article;
