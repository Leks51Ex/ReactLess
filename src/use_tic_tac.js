import { useState } from 'react';


const SYMBOL_X = 'X';
const SYMBOL_O = 'O';

const computeWinner= (cells)=>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5 ,8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      cells[a]&& cells[a]===cells[b] && cells[a]===cells[c]
    ) {
      console.log('game over')
     return [a, b , c ]; 
    }
  }
  }




const useTicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currentStep, setCurrentStep] = useState(SYMBOL_X);
    const [winnerSequence, setWinnerSequence] = useState(null);
    const handleCellClick = (index) => {
      if (cells[index] || winnerSequence) {
        return;
      }
      const cellsCopy = cells.slice();
      cellsCopy[index] = currentStep;
      const winner = computeWinner(cellsCopy);
      setCells(cellsCopy);
      setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
      setWinnerSequence(winner);
    };
    const handleResetClick = () => {
      setCells(Array(9).fill(null));
      setCurrentStep(SYMBOL_X);
      setWinnerSequence(null);
    };
    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : null;
    const isDraw = !winnerSequence && cells.filter(Boolean).length === 9;
    return {
      cells,
      currentStep,
      winnerSequence,
      winnerSymbol,
      isDraw,
      handleCellClick,
      handleResetClick,
    };
  };
  export default useTicTacToe;