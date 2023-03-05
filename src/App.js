import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const resetCount = () => setCount(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <span id="value">{count}</span>
      <div className="btn-group">
        <button onClick={decrement} className="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={resetCount} className="btn btn-reset">
          RESET
        </button>
        <button onClick={increment} className="btn btn-increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}


