import React from "react";

import "./App.css";

import Card from "./components/Card";
import CounterPage from "./pages/counter/CounterPage";
import Search from "./pages/search-filter/Search";

export default function App() {
  console.log(" ");

  return (
    <div className="main-app">
      {/* <CounterPage /> */}
      <Search />
    </div>
  );
}
