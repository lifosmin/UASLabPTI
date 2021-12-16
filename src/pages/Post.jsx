import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getBlogs, getNews } from "../utils/service";
import { motion } from "framer-motion";
import { SkeletonText, Skeleton } from "@chakra-ui/react";
import { Swal } from "sweetalert2";
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
  const [post, setPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "Post | Berita PTI";

    const fetchData = async () => {
      let response;
      try {
        if (type.toLowerCase() === "news") {
          response = await getNews();
        } else if (type.toLowerCase() === "blogs") {
          response = await getBlogs();
        }
        setPost(response.filter((data) => data.id == id)[0] || null);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "ERROR!",
          text: error,
        });
      } finally {
        setIsLoaded(true);
      }
    };

    fetchData();
  }, []);

  if (isLoaded) {
    if (post !== null) {
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
            <img src={post.image} alt="Article image" loading="lazy" />
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
      return <Redirect to="/404" />;
    }
  } else {
    return (
      <motion.div
        className="post"
        variants={cardVariants}
        initial="rest"
        animate="enter"
        exit="exit"
      >
        <Skeleton h="1.2rem" w="50%" m="0 auto" />
        <Skeleton h="1.2rem" w="20%" m="1rem auto" />
        <Skeleton width={{ base: "100%", md: "60%" }} h="400px" m="2rem auto" />
        <SkeletonText mt="1rem" />
      </motion.div>
    );
  }
};

export default Post;
