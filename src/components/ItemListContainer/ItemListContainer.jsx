import React from "react";
import "./ItemListContainer.modules.css";

export default function ItemListContainer(props) {
  return (
    <div className="TileContainer">
      <p>{props.title}</p>
    </div>
  );
}
