import React, { useEffect } from "react";
import { Flex, Text, Alert, AlertTitle } from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/react";
import { MyButton } from "../components/Button";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Login.scss";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: 100, opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  rest: { y: 100, opacity: 0 },
};

const alertVariants = {
  exit: { y: -50, opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  rest: { y: -50, opacity: 0 },
};

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    document.title = "Login | Berita PTI";
  }, []);

  const onSubmit = (data) => {
    let status = false;
    for (let i = 0; i < accoutList.length; i++) {
      if (
        data.email === accoutList[i].email &&
        data.password === accoutList[i].password
      ) {
        status = true;
        localStorage.setItem("logged", true);
        localStorage.setItem("logData", JSON.stringify(accoutList[i]));
        window.location.href = "/Blogs";
        break;
      }
    }

    if (!status) {
      history.push("/Login", {
        status: "error",
        message: "You have entered incorrect email or password",
      });
    }
  };

  return (
    <motion.div className="login" initial="rest" animate="enter" exit="exit">
      {location.state && (
        <motion.div variants={alertVariants}>
          <Alert
            status={location.state.status}
            width="max-content"
            mb="1rem"
            borderRadius="5px"
          >
            <AlertIcon />
            <AlertTitle>{location.state.message}</AlertTitle>
          </Alert>
        </motion.div>
      )}
      <motion.div className="login__card" variants={cardVariants}>
        <form
          className="login__card__content"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            {...register("email", {
              required: "Please type your email!",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please enter valid email address!",
              },
            })}
          />
          <span className="card-error">
            {errors.email && errors.email.message}
          </span>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: "Please type your password!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 char!",
              },
            })}
          />
          <span className="card-error">
            {errors.password && errors.password.message}
          </span>
          <Flex justifyContent="center">
            <MyButton className="login__btn">Login</MyButton>
          </Flex>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;

const accoutList = [
  {
    email: "bonifasius.finantyo@student.umn.ac.id",
    password: "12345678",
  },
  {
    email: "admin@beritapti.umn.ac.id",
    password: "12345678",
  },
];
