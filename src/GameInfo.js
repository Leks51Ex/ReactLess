function GameInfo({isDraw, winnerSequence, currentStep, winnerSymbol, renderSymbol}){
    return  <div className="game-info">
    {isDraw? 'Ничья': winnerSequence? 'Победитель': 'Ход'}
     {!isDraw && renderSymbol(winnerSymbol ?? currentStep)}
  </div>
  }

  export default GameInfo;