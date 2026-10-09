import React, { useState } from "react";
import Button from "./Button";
export default function MoreButtons() {
  const [buttonResult, setButtonResult] = useState("Select one button");

  function handleClick(value) {
    setButtonResult(value);
    console.log(value + " " + "button clicked!");
  }
  return (
    <>
      <Button onSelect={() => handleClick("Best seller phones")}>
        More Information
      </Button>
      <Button
        onSelect={() => handleClick("You can contact to our support team")}
      >
        Our Support Team
      </Button>
      <div className="m-2 text-secondary">{buttonResult}</div>
    </>
  );
}
