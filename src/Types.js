import React from "react";
export default function Types(props) {
  const { typesofhamburgers } = props;
  return (
    <>
      <div>
        <img src={typesofhamburgers.image} />
        <p>{typesofhamburgers.type}</p>
        <p>{typesofhamburgers.preptime}</p>
        <p>{typesofhamburgers.cost}</p>
      </div>
    </>
  );
}
