import React from "react";
import { useHistory } from "react-router-dom";
import "./Success.css";

export default function Success(props) {
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
        </div>
        <p className="confirmation">TEBRİKLER! SİPARİŞİNİZ ALINDI!</p>
        <img
          src="https://media.tenor.com/vgWNUVgKiMUAAAAj/cute-adorable.gif"
          className="gif"
        />
      </div>
    </>
  );
}
