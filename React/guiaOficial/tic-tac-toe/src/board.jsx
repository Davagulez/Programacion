import { Square } from "./button";
import { useState } from "react";
import { calculateWinner } from "./calculateWinner";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
      setSquares(nextSquares);
      setXIsNext(!xIsNext)
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Ganador: " + winner;
    } else {
      status = "Proximo Jugador: " + (xIsNext ? "X" : "O");
    }
    return(
      <>
        <div className="status">{status}</div>
        <div className="tictac__table board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div></>
    );
  
  }