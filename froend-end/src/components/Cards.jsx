import React from "react";
import { phones } from "./lacalDatabase";
import Card from "./Card";

function Cards() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 lg:grid-cols-4 xl:grid-cols-4">
      {phones.map((x) => (
        <Card key={x._id} datas={x} />
      ))}
    </div>
  );
}

export default Cards;
