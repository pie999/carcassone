import { useState } from "react";
import "./Board.css";

export default function Board() {
  const [tileSize, setTileSize] = useState(100);

  const tileSizeStyle = {
    "--tile-size": tileSize + "px",
  };

  const tiles = [];
  for (let i = 0; i < 400; i++) {
    tiles.push(
      <div
        className="tile"
        onClick={(e) => e.target.classList.toggle("filled")}
      ></div>
    );
  }

  return (
    <>
      <button
        onClick={() => {
          if (tileSize < 200) setTileSize(tileSize + 10);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (tileSize > 30) setTileSize(tileSize - 10);
        }}
      >
        -
      </button>
      <div className="board" style={tileSizeStyle}>
        {tiles}
      </div>
    </>
  );
}
