import React from "react";
import "./Home.css";
import Types from "./Types.js";
import { type } from "@testing-library/user-event/dist/type";

const typesofhamburgers = [
  {
    image:
      "https://i.pinimg.com/564x/1e/65/4f/1e654fac595d426d7ffffccd754b5977.jpg",
    type: "Double Burger",
    preptime: "20-30 Min",
    cost: "$12 ",
  },
  {
    image:
      "https://i.pinimg.com/236x/d3/fc/cd/d3fccd9b8160ecb10854814b4283acdb.jpg",
    type: "Cheese Burger",
    preptime: "30-35 Min",
    cost: "$8 ",
  },
  {
    image:
      "https://i.pinimg.com/564x/90/af/0a/90af0a944653e327392db5c54bb44bdd.jpg",
    type: "Chicken Burger",
    preptime: "10-20 Min",
    cost: "$7 ",
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="hamburger">
        <img
          src="https://i.pinimg.com/564x/f2/83/8c/f2838cdc73d940342a39c713131e9fac.jpg"
          alt="hamburger"
          className="hamburgerImg"
        />
      </div>
      <div className="stores">
        {typesofhamburgers.map((event) => (
          <Types typesofhamburgers={event} />
        ))}
      </div>
    </div>
  );
}