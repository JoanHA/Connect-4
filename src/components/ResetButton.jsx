import React from "react";
import { GAME_PROGRESS } from "../lib/Constants";
function ResetButton({ reset, suggest, gameState }) {
  const renderButtons = () => {
    if (gameState === GAME_PROGRESS) {
   return   <button style={{ margin: "0 7px" }} onClick={suggest}>
        Sugerir
      </button>;
    } 
    return <button onClick={reset}>Nuevo juego</button>;
    
  };
  return (
    <div className="reset">
      <div>{renderButtons()}</div>
    </div>
  );
}

export default ResetButton;
