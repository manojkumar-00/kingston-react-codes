import React from "react";

import "./App.css";

import { AccorionPage, BlogPage, CounterPage, Search } from "./pages/index";

export default function App() {
  console.log(" ");

  const arr = [10, 20, 30, 50, 60];

  return (
    <div className="main-app">
      {/* <CounterPage /> */}
      {/* <Search /> */}
      {/* <AccordionPage /> */}
      <BlogPage />
    </div>
  );
}
