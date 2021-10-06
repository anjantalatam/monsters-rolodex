import React from "react";
import "./CardList.css";

export default function CardList(props) {
  return <div className="card-list">{props.children}</div>;
}
