import { useState } from "react";
import Block from "./Block";
import toast from "react-hot-toast";
import './index.css'

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
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

  const handleBlockClick = (index) => {
    const copystate = Array.from(state);
    if (copystate[index] !== null) return;
    copystate[index] = currentTurn;
    const win = checkWinner(copystate);
    if (win) {
      toast.success(`Player ${currentTurn} wins!`);
      setState(Array(9).fill(null))
    }
    else{
      setCurrentTurn(currentTurn === "X" ? "O" : "X");
      setState(copystate);
    }
  };

  return (
    <div className="grid grid-cols-3 w-fit mx-auto my-[5vh]">
      {(state ?? Array(9).fill(null)).map((item, index)=>(
        <Block onClick={() => handleBlockClick(index)} value={item} />
      ))}
    </div>
  );
}

export default App;
