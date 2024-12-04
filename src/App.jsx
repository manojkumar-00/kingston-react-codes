import React from "react";

import "./App.css";

import Card from "./components/Card";
import CounterPage from "./pages/counter/CounterPage";
import Search from "./pages/search-filter/Search";
import AccordionPage from "./pages/accordion/AccordionPage";

export default function App() {
  console.log(" ");

  const arr = [10, 20, 30, 50, 60];

  return (
    <div className="main-app">
      {/* <CounterPage /> */}
      <Search />
      {/* <AccordionPage /> */}
    </div>
  );
}
