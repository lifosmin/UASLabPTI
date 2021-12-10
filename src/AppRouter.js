import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.scss";

const AppRouter = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
        <Switch>
          <Route path="/News" render={() => <Article type="news" />} />
          <Route path="/Blogs" render={() => <Article type="blogs" />} />
          <Route path="/Developers" component={Article} />
          <Route path="/Login" component={Article} />
          <Route
            path="/Logout"
            render={() => {
              localStorage.clear();
              return <Redirect to="/" />;
            }}
          />
          <Route path="/*" component={Article} />
          <Route path="/" render={() => <Redirect to="/News" />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
