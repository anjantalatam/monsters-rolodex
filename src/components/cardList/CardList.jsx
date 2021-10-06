import React from "react";
import Card from "../card/Card";
import "./CardList.css";

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}
