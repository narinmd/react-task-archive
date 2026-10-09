import React from "react";

export default function Button({ counter, setCounter }) {
  return (
    <div>
      <h2>Button:{counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>Increase number</button>
    </div>
  );
}
