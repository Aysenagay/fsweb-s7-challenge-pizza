import React from "react";
export default function MenuList(props) {
  const { menuList } = props;
  return (
    <>
      <div>
        <img src={menuList.image} />
        <p>{menuList.type}</p>
        <p>{menuList.ingredients}</p>
        <p>{menuList.size}</p>
        <p>{menuList.cost}</p>
      </div>
    </>
  );
}
