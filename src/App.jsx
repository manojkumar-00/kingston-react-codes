import React from "react";

import "./App.css";

import Card from "./components/Card";
import products from "./assets/products-data";

import img1 from "./assets/images/ibm-1.jpg";
export default function App() {
  return (
    <div className="main-app">
      {/* {products?.map((product, idx) => {
        return (
          <Card
            product={product}
            idx={idx}
            key={idx}
            style={{ backgroundColor: "red", border: "1px solid black" }}
          />
        );
      })} */}
      {/* <Card /> */}
      <h1>Hello world!</h1>

      <img src={img1} alt="ibm-image" />
    </div>
  );
}
