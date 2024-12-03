import React, { useState } from "react";

import "./CounterPage.css";

function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
        {count}
      </h1>
      <div className="button__wrapper">
        <button onClick={() => setCount(count - 1)}> -</button>
        <button onClick={() => setCount(count + 1)}> +</button>
      </div>
    </div>
  );
}

export default CounterPage;
