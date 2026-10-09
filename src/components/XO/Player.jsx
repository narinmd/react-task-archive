import React, { useId, useState } from "react";

export default function Player() {
  const id = useId();
  const [showValue, setShowValue] = useState("Player Name ...");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setShowValue(event.target.value);
    console.log(event.target.value);
  }
  function handleClick() {
    setSubmitted(!submitted);
  }
  return (
    <div>
      <label htmlFor={`player_${id}`} className="m-2">
        Player Name:
      </label>
      <br />
      <div className="input-group w-25 m-2">
        <input
          id={`player_${id}`}
          type="text"
          onChange={handleChange}
          value={showValue}
          disabled={!submitted}
          className="form-control"
        />
        <button onClick={handleClick} className="btn btn-primary">
          {submitted ? "Save" : "Edit"}
        </button>
      </div>

      <p className="m-2">{showValue}</p>
    </div>
  );
}
