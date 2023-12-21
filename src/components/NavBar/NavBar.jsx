import React from "react";
import thempoIcono from "../../assets/iconos/thempoIcono.png";
import "./NavBar.modules.css";
import CardWidget from "../CardWidget/CardWidget";

export default function NavBar() {
  return (
    <nav className="NavBarContainer">
      <div className="NavBarTitle">
        {
          <img
            style={{ width: "8%" }}
            src={thempoIcono}
            alt="Logo de la marca thempo"
          />
        }
        <h1>Thempo</h1>
      </div>
      <div className="NavBarButtonsContainer">
        <div className="NavBarButtons">
          <button>Relojes</button>
          <button>Deco</button>
          <button>Blog</button>
        </div>
        <CardWidget />
      </div>
    </nav>
  );
}
