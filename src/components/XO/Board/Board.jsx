import React, { useState } from "react";
import Square from "../Square/Square";
import { calculateWinner } from "../../../utils/winner";
import xoGame from "../../../assets/xogame.jpg";
import "./Board.css";
import Player from "../Player";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleSelect(index) {
    console.log(calculateWinner(squares));
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const nextSquare = squares.slice();
    if (isXNext) {
      nextSquare[index] = "X";
    } else {
      nextSquare[index] = "O";
    }
    setSquares(nextSquare);
    setIsXNext(!isXNext);
  }
  let status;
  const winner = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Player's turn: " + (isXNext ? "X" : "O");
  }
  return (
    <div className="m-2">
      <div className="d-flex justify-content-center gap-2 align-items-center">
        <img
          src={xoGame}
          alt=""
          style={{ width: "60px" }}
          className="img-border"
        />
        <h2 className="text-danger fs-4">Tic-tac-toe</h2>
      </div>
      <hr />
      <div className="mb-5">
        <Player />
      </div>

      {/* import img from public folder (a way to add image) */}
      {/* <img src="../public/xogame.jpg" alt="" /> */}

      <div className="mb-1">{status}</div>
      <div className="board-row">
        <Square onSelected={() => handleSelect(0)} value={squares[0]} />
        <Square onSelected={() => handleSelect(1)} value={squares[1]} />
        <Square onSelected={() => handleSelect(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSelected={() => handleSelect(3)} value={squares[3]} />
        <Square onSelected={() => handleSelect(4)} value={squares[4]} />
        <Square onSelected={() => handleSelect(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSelected={() => handleSelect(6)} value={squares[6]} />
        <Square onSelected={() => handleSelect(7)} value={squares[7]} />
        <Square onSelected={() => handleSelect(8)} value={squares[8]} />
      </div>
    </div>
  );
}
