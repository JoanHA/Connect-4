import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../assets/CSS/GameBoard.css";

function GameBoard() {
  const N_CIRCLES = 16;
  const NO_PLAYER = 0;
  const PLAYER_1 = 1;
  const PLAYER_2 = 2;

  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  //Render cirles
  const CircleClicked = (id) => {
    //Updating the  BAD WAY
    // const board = [...gameBoard];
    // board[id] = currentPlayer;
    // setGameBoard(board);

    //Updating the array  GOOD WAY
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    console.log(gameBoard);
    console.log(currentPlayer);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        isClicked={CircleClicked}
        className={`player_${gameBoard[id]} circle`}
      ></GameCircle>
    );
  };
  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < N_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  return <div className="board">{initBoard()}</div>;
}

export default GameBoard;
