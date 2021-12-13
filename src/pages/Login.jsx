import React from "react";
import { Flex, Text, Alert, AlertTitle } from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/react";
import { MyButton } from "../components/Button";
import { useForm } from "react-hook-form";
import "../styles/Login.scss";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const location = useLocation();

  const onSubmit = (data) => {
    let status = false;
    for (let i = 0; i < accoutList.length; i++) {
      if (
        data.email === accoutList[i].email &&
        data.password === accoutList[i].password
      ) {
        status = true;
        break;
      }
    }

    if (status) {
      localStorage.setItem("logged", true);
      localStorage.setItem("logData", JSON.stringify(accoutList[i]));
      window.location.href = "/Blogs";
    } else {
      history.push("/Login", {
        status: "error",
        message: "You have entered incorrect email or password",
      });
    }
  };

  return (
    <div className="login">
      {location.state && location.state.status}
      <div className="login__card">
        {/* <div className="login__card__header">
          <h1 className="login_card_title">Login</h1>
        </div> */}
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
                message: "Please enter valid email address",
              },
            })}
          />
          <span>{errors.email && errors.email.message}</span>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: "Please type your password!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 char",
              },
            })}
          />
          <span>{errors.password && errors.password.message}</span>
          <Flex justifyContent="center">
            <MyButton className="login__btn">Login</MyButton>
          </Flex>
        </form>
      </div>
    </div>
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
