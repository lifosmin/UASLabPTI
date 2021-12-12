import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MyButton } from "../components/Button";
import { useForm } from "react-hook-form";
import "../styles/Login.scss";
import { useHistory } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    for (let i = 0; i < accoutList.length; i++) {
      if (
        data.email === accoutList[i].email &&
        data.password === accoutList[i].password
      ) {
        localStorage.setItem("logged", true);
        localStorage.setItem("logData", JSON.stringify(accoutList[i]));
        history.push("/Blogs");
      } else {
        history.push("/login", {
          message: "You have entered incorrect email or password",
        });
      }
    }
  };

  return (
    <div className="login">
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
];
