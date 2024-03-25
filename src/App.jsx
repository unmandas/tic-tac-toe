import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "../winning-combinatinons";
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function computeActivePlayer(prevPlayer) {
  let currentPlayer = "X";
  if (prevPlayer.length > 0 && prevPlayer[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}
function App() {
  const [playerLog, setPlayerLog] = useState([]);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  let winner = null;

  for (const log of playerLog) {
    const { square, player } = log;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combinations of WINNING_COMBINATIONS) {
    let firstValue = gameBoard[combinations[0].row][combinations[0].column];
    let secondValue = gameBoard[combinations[1].row][combinations[1].column];
    let thirdValue = gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstValue &&
      firstValue === secondValue &&
      secondValue === thirdValue
    ) {
      winner = firstValue;
    }
  }

  const activePlayer = computeActivePlayer(playerLog);

  function toggleActivePlayer(rowIndex, colIndex) {
    setPlayerLog((prevLog) => {
      const currentPlayer = computeActivePlayer(prevLog);
      let newLog = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevLog,
      ];
      return newLog;
    });
  }

  function onRestart() {
    setPlayerLog([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" active={activePlayer === "X"} />
          <Player name="Player 2" symbol="0" active={activePlayer === "0"} />
        </ol>
        {winner || playerLog.length === 9 ? (
          <GameOver winner={winner} onRestart={onRestart} />
        ) : undefined}
        <GameBoard onSelectSquare={toggleActivePlayer} gameBoard={gameBoard} />
      </div>
      <Log playerLog={playerLog} />
    </main>
  );
}

export default App;
