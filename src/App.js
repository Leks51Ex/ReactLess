import { useEffect, useState } from 'react';
import './App.css';
import './index.css'; 
import GameInfo from './GameInfo';
import GameField from './GameField';
import useTicTacToe from './use_tic_tac';





  function App() {
    const {
      cells,
      currentStep,
      winnerSequence,
      winnerSymbol,
      isDraw,
      handleCellClick,
      handleResetClick,
    } = useTicTacToe();
    const getSymbolClassName = (symbol) => {
      if (symbol === 'O') return 'symbol--o';
      if (symbol === 'X') return 'symbol--x';
      return '';
    };
    const renderSymbol = (symbol) => (
      <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
    );
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
          winnerSymbol={winnerSymbol}
        />
        <button className='reset' onClick={handleResetClick}>Сбросить</button>
      </div>
    );
  }
  export default App;

