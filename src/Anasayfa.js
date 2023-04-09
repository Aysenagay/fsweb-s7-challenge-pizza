import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./Anasayfa.css";
import Menu from "./Menu";

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
            <Link to="/Menu">
              <button className="anasayfabuton">SİPARİŞİNİ HEMEN VER!</button>
            </Link>
            <img alt="anasayfaPizza" className="anasayfafoto" src=""></img>
          </Route>
          <Route exact path="/Menu">
            <Menu />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
