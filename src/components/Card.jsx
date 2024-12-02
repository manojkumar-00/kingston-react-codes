import React from "react";

import "./Card.css";

function Card() {
  const products = [
    {
      id: 1,
      name: "Computer",
      description: "Product Description",
      price: "Rs9,999",
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Laptop",
      description: "Product Description",
      price: "Rs49,999",
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Iphone 5 SE",
      description: "Product Description",
      price: "Rs15999",
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return products?.map((product, idx) => (
    <div className="card" key={idx}>
      <div className="card-image">
        <img src={product?.image} alt="amazon-box" />
      </div>
      <div className="card-content">
        <h3>{product?.name}</h3>
        <p>{product?.description}</p>
        <p>Rs{product?.price}</p>
      </div>
    </div>
  ));
}

export default Card;
