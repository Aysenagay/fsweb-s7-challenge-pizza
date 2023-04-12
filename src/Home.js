/*import React from "react";
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
      "https://i.pinimg.com/564x/a2/8d/3a/a28d3a7d8fd1779574cd6016888b1870.jpg",
    type: "Chicken Burger",
    preptime: "10-20 Min",
    cost: "$7 ",
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="types">
        {typesofhamburgers.map((event) => (
          <Types typesofhamburgers={event} />
        ))}
      </div>
    </div>
  );
}*/
import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const toOrderform = () => {
    history.push("/Orderform");
  };
  return (
    <div className="Home-container">
      <div className="heading">
        <h1 className="tittle">Teknoloji Yemekleri</h1>
        <h5 className="subtittle">KOD ACIKTIRIR PIZZA,DOYURUR</h5>
        <button onClick={toOrderform}>ACIKTIM</button>
      </div>
      <img alt="pizzaphoto" src="mvp-banner.png" />
    </div>
  );
}
