import React from "react";

import "./App.css";

import Card from "./components/Card";

import Login from "./components/nav-bar/Login";

export default function App() {
  console.log(" ");

  return (
    <div className="main-app">
      {/* <Card/> */}
      {/* <h1>Hello world</h1> */}
      {/* <Test /> */}
      <Login />
    </div>
  );
}
