import React from "react";
import {
  GAME_PROGRESS,
  GAME_DRAW,
  GAME_IDLE,
  GAME_WIN,
} from "../lib/Constants";
function Header({ gameState, player,winnerPlayer }) {
  const changeLabel = () => {
    switch (gameState) {
      case GAME_PROGRESS:
        return `Turno del jugador ${player} `
        case GAME_WIN:
          return `Gana el Jugador ${winnerPlayer}  `
          case GAME_DRAW:
          return `Empate!`
      default:
        break;
    }
  };
  return (
    <div className="panel header">
      <div className="playerName">{changeLabel()}</div>
    </div>
  );
}

export default Header;
