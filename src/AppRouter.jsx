import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.scss";
import Developer from "./pages/Developer";
import Errors from "./pages/Errors";
import Login from "./pages/Login";
import Post from "./pages/Post";
import ProtectedRouter from "./ProtectedRouter";
import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/Post/:type/:id" component={Post} />
            <Route path="/News" render={() => <Article type="news" />} />
            <ProtectedRouter path="/Blogs">
              <Article type="blogs" />
            </ProtectedRouter>
            <Route path="/Developers" component={Developer} />
            <Route path="/Login" component={Login} />
            <Route path="/404" exact component={Errors} />
            <Route
              path="/Logout"
              render={() => {
                localStorage.clear();
                return (
                  <Redirect
                    to={{
                      pathname: "/Login",
                      state: {
                        status: "success",
                        message: "You have successfully logout",
                      },
                    }}
                  />
                );
              }}
            />
            <Route
              path="/Logout"
              exact
              render={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
            />
            <Route path="/" exact render={() => <Redirect to="/News" />} />
            <Route path="/*" render={() => <Redirect to="/404" />} />
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
