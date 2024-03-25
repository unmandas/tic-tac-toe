import React from "react";

const Log = ({ playerLog }) => {
  return (
    <div>
      <ol id="log">
        {playerLog.map((item) => {
          return (
            <li key={`${item.square.row}${item.square.col}`}>
              {item.player} has selected the square with row = {item.square.row}{" "}
              and column = {item.square.col}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Log;
