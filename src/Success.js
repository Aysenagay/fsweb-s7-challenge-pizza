import React from "react";
import { useHistory } from "react-router-dom";
import "./Success.css";

export default function Success(props) {
  const { alreadyOrdered } = props;
  console.log(alreadyOrdered);

  const history = useHistory();
  const toHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className="successContainer">
        <div className="heading">
          <button className="secondButton" onClick={toHome}>
            ANASAYFAYA DÖN
          </button>
          <h1 className="successtittle">Teknoloji Yemekleri</h1>
        </div>
        <p className="confirmation">SİPARİŞİNİZ YOLA ÇIKTI</p>
        <img
          src="https://media.tenor.com/vgWNUVgKiMUAAAAj/cute-adorable.gif"
          className="gif"
        />
      </div>
    </>
  );
}
