import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getDeveloper } from "../utils/service";
import { Skeleton } from "@chakra-ui/react";
import "../styles/Developer.scss";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: -100, opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: 100, opacity: 0 },
};

const imgVariants = {
  rest: { borderRadius: 0 },
  hover: {
    scale: 1.1,
    transition: { delay: 0.2, duration: 1, ease: transition.ease },
  },
};

const Card = ({ data, index }) => {
  return (
    <motion.div
      initial="rest"
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 * index, ...transition },
      }}
      exit="exit"
      className="dev__card"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="img-wrapper">
        <motion.img
          src={data.img}
          alt="profile picture"
          loading="lazy"
          variants={imgVariants}
        />
      </div>
      <div className="card-desc">
        <p className="card-desc__name">{data.name}</p>
        <p className="card-desc__nim">{data.nim}</p>
        <p className="card-desc__sum">{data.summary}</p>
      </div>
    </motion.div>
  );
};

const Developer = () => {
  const [developer, setDeveloper] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    try {
      getDeveloper().then((response) => {
        setDeveloper(response);
        setIsloaded(true);
      });
      console.log("data fetched successfuly");
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="dev">
        <Skeleton className="dev__dummy-card" />
        <Skeleton className="dev__dummy-card" />
        <Skeleton className="dev__dummy-card" />
      </div>
    );
  } else {
    return (
      <div className="dev">
        {developer.map((data, index) => (
          <Card data={data} key={index} index={index} />
        ))}
      </div>
    );
  }
};

export default Developer;
