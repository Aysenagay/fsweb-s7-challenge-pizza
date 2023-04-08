import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./Anasayfa.css";

export default function Anasayfa() {
  return (
    <div className="anasayfacontainer">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="baslik">
              <h1>Teknolojik Yemekler</h1>
              <p>Herkesin sevdiği lezzet:Pizza!</p>
            </div>
            <Link to="/Menu.js">
              <button className="anasayfabuton">SİPARİŞİNİ HEMEN VER!</button>
            </Link>
            <img
              alt="anasayfaPizza"
              className="anasayfafoto"
              src="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/italyan_pizza.webp"
            ></img>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
