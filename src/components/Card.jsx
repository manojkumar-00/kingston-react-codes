import React from "react";

import "./Card.css";

function Card({ product, idx, key, style }) {
  // let product = data?.product;
  // let idx = data?.idx;
  console.log(key);
  console.log(style);

  return (
    <div className="card" key={idx} style={style}>
      <div className="card-image">
        <img src={product?.image} alt="amazon-box" />
      </div>
      <div className="card-content">
        <h3>{product?.name}</h3>
        <p>{product?.description}</p>
        <p>Rs{product?.price}</p>
      </div>
    </div>
  );
}

export default Card;
