import { useState } from "react";
import Block from "./Block";

function App() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [currentTurn, setcurrentTurn] = useState("X");
  const checkWinner = (state) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (
        state[a] !== null &&
        state[b] &&
        state[a] === state[c] &&
        state[b] === state[c]
      )
        return true;
    }
    return false;
  };

  const handleBlockClic = (index) => {
    const copystate = Array.from(state);
    if (copystate[index] !== null) return;

    copystate[index] = currentTurn;

    const win = checkWinner(copystate);
    if (win) {
      alert("Player " + currentTurn + " wins!");
    }

    setcurrentTurn(currentTurn === "X" ? "O" : "X");
    setstate(copystate);
  };

  return (
    <div className="p-12">
      <div className="flex">
        <Block onClick={() => handleBlockClic(0)} value={state[0]} />
        <Block onClick={() => handleBlockClic(1)} value={state[1]} />
        <Block onClick={() => handleBlockClic(2)} value={state[2]} />
      </div>
      <div className="flex">
        <Block onClick={() => handleBlockClic(3)} value={state[3]} />
        <Block onClick={() => handleBlockClic(4)} value={state[4]} />
        <Block onClick={() => handleBlockClic(5)} value={state[5]} />
      </div>
      <div className="flex">
        <Block onClick={() => handleBlockClic(6)} value={state[6]} />
        <Block onClick={() => handleBlockClic(7)} value={state[7]} />
        <Block onClick={() => handleBlockClic(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
