import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function UseCart() {
  return useContext(CartContext);
}
