import React, { useState } from "react";

import "./CounterPage.css";

function CounterPage() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <div className="counter-container">
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : ""}>
        {count}
      </h1>

      <div className="button__wrapper">
        <button onClick={decrementCount}>- </button>
        <button onClick={incrementCount}>+ </button>
      </div>
    </div>
  );
}

export default CounterPage;
