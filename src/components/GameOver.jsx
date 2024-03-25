import React from "react";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{winner} Won!</p> : <p>It's a draw</p>}
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default GameOver;
