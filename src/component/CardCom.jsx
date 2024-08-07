import React from "react";
import Card from "./Card";
import "../component/Card.css";
import img1 from "../image/teodor-drobota-uyyRJA2an4o-unsplash.jpg";

function CardCom() {
  return (
    <>
      <h1 className="heading">Card Gallay</h1>
      <div className="cardComp">
        <Card title="1" img={img1} />
        <Card title="2" img={img1} />
        <Card title="3" img={img1} />
        <Card title="4" img={img1} />
        <Card title="5" img={img1} />
        <Card title="6" img={img1} />
      </div>
    </>
  );
}

export default CardCom;
