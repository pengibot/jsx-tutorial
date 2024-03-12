import React from "react";

const ClickableItem = ({ item, onClickHandler }) => {
  return (
    <div>
      <p>{item}</p>
      <button onClick={() => onClickHandler(item)}>Click me</button>
    </div>
  );
};

export default ClickableItem;
