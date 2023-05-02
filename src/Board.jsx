import { useState } from "react";
import "./Board.css";

const gridMatrix = [];
for (let y = 0; y < 20; y++) {
  const rowArray = [];
  for (let x = 0; x < 20; x++) {
    rowArray.push(0);
  }
  gridMatrix.push(rowArray);
}

export default function Board() {
  const [grid, setGrid] = useState(gridMatrix);
  const [tileSize, setTileSize] = useState(100);

  const handleTileClick = (event) => {
    const x = event.target.dataset.x;
    const y = event.target.dataset.y;
    // copy grid content in newGrid
    const newGrid = [];
    for (var i = 0; i < grid.length; i++) newGrid[i] = [...grid[i]];

    newGrid[x][y] = 1;
    setGrid(newGrid);

    // const db = firebase.database();
    // db.ref("tile-clicks").push({ x, y });
  };

  const renderedGrid = grid.map((row, y) =>
    row.map((col, x) => (
      <div
        key={`${x}-${y}`}
        className={grid[x][y] == 1 ? "tile filled" : "tile"}
        data-x={x}
        data-y={y}
        onClick={handleTileClick}
      >
        {`(${x},${y})`}
      </div>
    ))
  );

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
      <div className="board" style={{ "--tile-size": tileSize + "px" }}>
        {renderedGrid}
      </div>
    </>
  );
}
