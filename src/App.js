import { useEffect, useState } from 'react';
import './App.css';
import './index.css'; 
import GameInfo from './GameInfo';
import GameField from './GameField';



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


function App() {
  const [state, setState] = useState(SYMBOL_O,);
  const [cells, setCells] = useState([
    null,  null, null,
    null, null,  null,
    null,  null, null
]); 
const [winnerSequence, setWinnerSequence] = useState();
  const [currentStep, setCurrentStep] =  useState(SYMBOL_O) ;
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return 'symbol--o';
    if (symbol === SYMBOL_X) return 'symbol--x';
    return '';
  }

  const renderSymbol = (symbol)=><span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>;

  const handleCellClick= (index)=>{
    if (cells[index] || winnerSequence) {
      return;
    }
  
    
    const cellsCopy = cells.slice();
    cellsCopy[index]= currentStep;


    const winner = computeWinner(cellsCopy);
    
    setCells(cellsCopy)
    setCurrentStep(currentStep===SYMBOL_O ? SYMBOL_X: SYMBOL_O )
    setWinnerSequence(winner)
  }

  const handleResetClick= ()=>{
  setCells(Array.from({length: 9}, ()=> null));
  setCurrentStep(SYMBOL_X);
  setWinnerSequence(undefined);

  }


  
  const winnerSymbol = winnerSequence? cells[winnerSequence[0]] : undefined
  const isDraw = !winnerSequence && cells.filter(value=>value).length===9;
  

  

  useEffect(()=>{
    if (winnerSymbol) {
      console.log('Победитель', winnerSymbol);
    }
  }, )
  


  return (
    <div className="game">
     
      <GameInfo 
        isDraw={isDraw} 
        currentStep={currentStep} 
        winnerSequence={winnerSequence} 
        winnerSymbol={winnerSymbol} 
        renderSymbol={renderSymbol}
      />
      <GameField 
        cells={cells} 
        winnerSequence={winnerSequence}
        renderSymbol={renderSymbol} 
        winnerSymbol={winnerSymbol}/>
      <button class ='reset' onClick={handleResetClick}>Сбросить</button>
      <p></p>
    
    </div>
  );
}
export default App;





