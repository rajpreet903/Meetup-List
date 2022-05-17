import React from "react";
import css from "./cards.module.css";
const Cards = (props) => {
   return <div className={css.card}>{props.children}</div>;
};

export default Cards;
