import { useState } from "react";

const GameBoard = ({ onSelectSquare, gameBoard }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleButtonClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     let newGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     newGameBoard[rowIndex][colIndex] = symbol;
  //     return newGameBoard;
  //   });
  //   onSelectSquare();
  // }

  // let gameBoard = initialGameBoard;

  // for (const log of playerLog) {
  //   const { square, player } = log;
  //   const { row, col } = square;
  //   gameBoard[row][col] = player;
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      disabled={playerSymbol !== null}
                      onClick={() => {
                        onSelectSquare(rowIndex, colIndex);
                      }}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
