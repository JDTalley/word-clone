import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

const buttonStyle = {
  height: '25px',
  backgroundColor: 'hsl(0deg 0% 25%)',
  color: 'white',
  textAlign: 'center',
  borderRadius: '5px',
}



function Game() {
  const [gameState, setGameState] = React.useState('');
  const [answer, setAnswer] = React.useState(() => {
    // Pick a random word on every pageload.
    const answer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
    return answer;
  })
  const [guesses, setGuesses] = React.useState([]);

  function handleRestart(e) {
    e.preventDefault();

    const newAnswer = sample(WORDS);

    setGameState('');
    setAnswer(newAnswer);
    console.log({ newAnswer });
    setGuesses([]);
  }

  function addGuess(guess) {
    if (guess == answer) {
      setGameState('win');
    }
    if (guesses.length == 5) {
      setGameState('lose');
    }
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <button style={buttonStyle} onClick={handleRestart}>Restart</button>
      <GuessInput addGuess={addGuess} disabled={!gameState == ''} />
      <Banner gameState={gameState} guesses={guesses} />
    </>
  );
}

export default Game;
