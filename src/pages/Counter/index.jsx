import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => setCounter((c) => c + 1);
  const handleMinus = () => {
    // if (counter + 1 > 0)
     setCounter((c) => c - 1);
  };
  const handleReset = () => setCounter(0);
  return (
    <div>
      <button id="add-count" onClick={handleAdd}>
        +
      </button>
      <button id="minus-count" onClick={handleMinus}>
        -
      </button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <h4 id="counter-value">{counter}</h4>
    </div>
  );
}
