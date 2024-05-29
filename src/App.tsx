import './App.css';
import Square from './Square.tsx';
import ResetButton from './Reset.tsx';
import Message from './Message.tsx';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turnPlayer, changePlayer] = useState('X');
  const [message, setMessage] = useState('');
  const [gameOver, finishGame] = useState(false);
  const [turnsTaken, countTurns] = useState(0);

  const handleClick = (location: number) => {
    countTurns(() => turnsTaken + 1);
    const squaresCopy = squares.slice();
    if (squaresCopy[location] != null || gameOver) {
      //if square already picked
      return;
    }
    squaresCopy[location] = turnPlayer;
    setSquares(squaresCopy);
    checkWinner();
    if (turnPlayer === 'X') {
      changePlayer('O');
    } else {
      changePlayer('X');
    }
  };

  const renderSquare = (location: number) => {
    return (
      <Square onClick={() => handleClick(location)} value={squares[location]} />
    );
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setMessage('');
    finishGame(false);
    countTurns(0);
  };

  const checkWinner = () => {
    if (
      squares[0] == squares[3] &&
      squares[0] == squares[6] &&
      squares[0] != null &&
      squares[3] != null &&
      squares[6] != null
    ) {
      setMessage(squares[0] + ' Wins!');
      finishGame(true);
    }

    if (
      squares[1] == squares[4] &&
      squares[1] == squares[7] &&
      squares[1] != null &&
      squares[4] != null &&
      squares[7] != null
    ) {
      setMessage(squares[1] + ' Wins!');
      finishGame(true);
    }

    if (
      squares[2] == squares[5] &&
      squares[2] == squares[8] &&
      squares[2] != null &&
      squares[5] != null &&
      squares[8] != null
    ) {
      setMessage(squares[2] + ' Wins!');
      finishGame(true);
    }

    if (
      squares[0] == squares[1] &&
      squares[0] == squares[2] &&
      squares[0] != null &&
      squares[1] != null &&
      squares[2] != null
    ) {
      setMessage(squares[2] + ' Wins!');
      finishGame(true);
    }

    if (
      squares[3] == squares[4] &&
      squares[3] == squares[5] &&
      squares[3] != null &&
      squares[4] != null &&
      squares[5] != null
    ) {
      setMessage(squares[3] + ' Wins!');
      finishGame(true);
    }

    if (
      squares[6] == squares[7] &&
      squares[6] == squares[8] &&
      squares[6] != null &&
      squares[7] != null &&
      squares[8] != null
    ) {
      setMessage(squares[6] + ' Wins!');
      finishGame(true);
    }

    if (
      squares[0] == squares[4] &&
      squares[0] == squares[8] &&
      squares[0] != null &&
      squares[4] != null &&
      squares[8] != null
    ) {
      setMessage(squares[0] + ' Wins!');
      finishGame(true);
    }

    if (
      squares[2] == squares[4] &&
      squares[2] == squares[6] &&
      squares[2] != null &&
      squares[4] != null &&
      squares[6] != null
    ) {
      setMessage(squares[2] + ' Wins!');
      finishGame(true);
    }

    if (turnsTaken >= 9 && gameOver == false) {
      setMessage('No winner!');
      finishGame(true);
    }
  };

  useEffect(() => {
    checkWinner(), squares;
  });

  return (
    <>
      <div id="board">
        <div id="row-one" className="row grid-container">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div id="row-two" className="row grid-container">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div id="row-three" className="row grid-container">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <ResetButton onClick={resetBoard} />
      <Message Message={message} />
    </>
  );
}

export default App;
