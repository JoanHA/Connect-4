import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import "../assets/CSS/GameBoard.css";
import Header from "./Header";
import ResetButton from "./ResetButton";
import { isWinner, isDraw, getComputerMove ,getRandomComputerMove} from "../lib/helper";
import {
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  GAME_DRAW,
  GAME_PROGRESS,
  GAME_IDLE,
  N_CIRCLES,
  GAME_WIN,
} from "../lib/Constants";
function GameBoard() {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_PROGRESS);
  const [winnerPlayer, setWinnerPlayer] = useState(NO_PLAYER);

  const initGame = () => {
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
    setGameState(GAME_PROGRESS);
    setWinnerPlayer(NO_PLAYER);
  };
  const suggestMove = ()=>{
    CircleClicked(getComputerMove(gameBoard));
  }
  useEffect(() => {
    initGame()
  
  }, []);
  //Render cirles
  const CircleClicked = (id) => {
    //Double check if the circle is taken
    if (gameBoard[id] !== NO_PLAYER) return;
    //Check if someone won
    if (gameState !== GAME_PROGRESS) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_WIN);

      setWinnerPlayer(currentPlayer);
    }
    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_DRAW);
      setWinnerPlayer(NO_PLAYER);
    }
    //Updating the array
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
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

  return (
    <>
      <div className="board">
        <Header
          gameState={gameState}
          player={currentPlayer}
          winnerPlayer={winnerPlayer}
        ></Header>
        {initBoard()}
        <ResetButton reset={initGame} gameState={gameState} suggest={suggestMove}/>
      </div>
      ;
    </>
  );
}

export default GameBoard;
