import React from "react";
import "../styles/Article.scss";

const Article = ({ type }) => {
  return (
    <div className="article">
      <div className="card">
        <a href="/awdawd" className="card__img">
          <img
            className="card__img"
            src="https://ultimagz.com/wp-content/uploads/DSC_0257-573x381.jpg"
            alt=""
          />
        </a>
        <p className="card__category">Category</p>
        <h1 className="card__title">Judul berita</h1>
        <p className="card__date">Tangaal publikasi</p>
        <p className="card__preview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          veritatis.
        </p>
      </div>
    </div>
  );
};

export default Article;
