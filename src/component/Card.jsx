import React from "react";
// import img from '../image/teodor-drobota-uyyRJA2an4o-unsplash.jpg'

function Card(props) {
  console.log(props);

  return (
    <>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>Nature {props.title} Image</h1>
        {/* <h1>{props.name}</h1> */}
      </div>
    </>
  );
}

export default Card;
