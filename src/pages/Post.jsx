import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs, getNews } from "../utils/service";
import "../styles/Post.scss";

const Post = () => {
  const { type, id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
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
      <div className="post">
        <h1 className="post__title">{post.title}</h1>
        <h3 className="post__author">
          {post.author}, {post.date}
        </h3>
        <div className="post__img">
          <img src={post.image} alt="Article image" />
        </div>
        {post.content.map((data) => (
          <p className="post__content">{data}</p>
        ))}
        <p className="post__cat">Category: {post.category.join(", ")}</p>
      </div>
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
