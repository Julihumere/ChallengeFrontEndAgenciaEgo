import React from "react";
import "./Models.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Models(props) {
  const [info, setInfo] = useState(false);
  const handleMouseOver = () => {
    setInfo(true);
  };

  const handleMouseOut = () => {
    setInfo(false);
  };
  return (
    <div
      className="models__card"
      onMouseMove={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h1 className="models__title">{props.name}</h1>
      <h2 className="models__info">
        {props.year} | ${props.price}
      </h2>
      <img className="models__photo" src={props.icon} />
      {info ? (
        <Link to={`/${props.id}`}>
          <button className="models__view">Ver Modelo</button>
        </Link>
      ) : null}
    </div>
  );
}
