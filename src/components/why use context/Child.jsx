import React from "react";
import Button from "./Button";

export default function Child({ counter, setCounter }) {
  return (
    <div>
      <h2>Child:{counter}</h2>

      <Button counter={counter} setCounter={setCounter} />
    </div>
  );
}
