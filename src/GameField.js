function GameField({cells, winnerSequence, handleCellClick, renderSymbol}){
    return  <div className='game-field'>
    {cells.map((symbol, index) => {
      const isWinner = winnerSequence?.includes(index);
      return (
        <button onClick={()=> handleCellClick(index)} key={index} className={`cell ${isWinner? 'cell--win': ''}`}>
          {symbol ? renderSymbol(symbol): null}
        </button>
  
      );
    })}
  </div>
  }

  export default GameField;