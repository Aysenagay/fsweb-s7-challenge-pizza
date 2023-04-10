import React from "react";
import * as yup from "yup";
import OrderForm from "./Orderform";
import Home from "./Home";
import "./App.css";
import Types from "./Types";
import { Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1 className="tittle">YEMEK PERİSİ</h1>
      <p className="subtittle">
        Yemek saatinde düşüneceğin tek şey: Hamburger!
      </p>
      <div className="links">
        <Link
          className="link"
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "tomato",
            padding: "10px",
            borderRadius: "10px",
            marginRight: "10px",
            fontWeight: "bold",
            letterSpacing: "1.2px",
          }}
        >
          Home
        </Link>
        <Link
          className="link"
          to="/hamburger"
          id="orderhamburger"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "tomato",
            padding: "10px",
            borderRadius: "10px",
            fontWeight: "bold",
            letterSpacing: "1.2px",
          }}
        >
          Order Form
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/hamburger" component={OrderForm}></Route>
      </Switch>
    </div>
  );
};
export default App;
