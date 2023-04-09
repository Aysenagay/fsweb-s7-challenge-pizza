import React from "react";
import "./Menu.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MenuList from "./MenuList";

const menuList = [
  {
    image:
      "https://i.pinimg.com/564x/a6/8b/61/a68b61bff6c375103e1fa96385d34ecb.jpg",
    type: "Veggie Deluxe Pizza",
    ingredients: "Mushroom,Chesee,Grape Tomatoes,Green bell pepper,Red Onion",
    size: "Large",
    cost: "25$",
  },
  {
    image:
      "https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg",
    type: "No-Yeast Pizza",
    ingredients:
      "Mushroom,Chesee,Grape Tomatoes,Green bell pepper,Red Onion,Sausage",
    size: "Large",
    cost: "30$",
  },
  {
    image:
      "https://i.pinimg.com/564x/b6/94/0e/b6940e530fa87fdf8f4e9cdf5ccafc36.jpg",
    type: "Pepperoni and Burrata Pizza",
    ingredients: "Basil, Fresh, Cherry tomatoes,Pepperoni,Pesto",
    size: "Large",
    cost: "28$",
  },
];
export default function Menu() {
  return (
    <div className="menu">
      <div className="menuList">
        {menuList.map((event) => (
          <MenuList menuList={event} />
        ))}
      </div>
    </div>
  );
}
