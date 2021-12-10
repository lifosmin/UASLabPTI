import React from "react";
import "../styles/Article.scss";

const json = {
  id: 1,
  title: "Banteng Terbang",
  date: "2021-12-10",
  category: ["Viral", "Fenomena"],
  image: "https://ultimagz.com/wp-content/uploads/DSC_0257-573x381.jpg",
  content:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora voluptate voluptas odit distinctio. Ducimus cupiditate veniam magni adipisci officia quos consequuntur earum, rerum repudiandae vel ipsa pariatur tenetur distinctio ex? Consectetur perspiciatis, aut itaque nostrum quas doloremque cumque hic maiores omnis atque nesciunt aliquid illum perferendis. Reprehenderit tempora reiciendis pariatur.",
};

const Card = ({ article }) => {
  return (
    <div className="card">
      <a href="/awdawd" className="card__img">
        <img className="card__img" src={article.image} alt="" />
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
  return (
    <div className="article">
      <Card article={json} />
    </div>
  );
};

export default Article;
