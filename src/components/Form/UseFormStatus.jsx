import React from "react";
import { useFormStatus } from "react-dom";

export default function UseFormStatus() {
  const { pending } = useFormStatus;
  return (
    <div>
      <button disabled={pending}>
        {pending ? "loading..." : "click on button"}
      </button>
    </div>
  );
}
