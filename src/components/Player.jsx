import { useState } from "react";

const Player = ({ name, symbol, active }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setisEditing] = useState(false);
  return (
    <li className={active ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setisEditing((prev) => !prev);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
