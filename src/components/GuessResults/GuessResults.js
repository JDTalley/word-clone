import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from '../../../src/constants';
import { range } from "../../utils";

function GuessResults({ guesses, answer }) {
  const guessRange = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {guessRange.map((number) => (
        <Guess key={number} answer={answer} guess={guesses[number] ? guesses[number] : undefined} />
      ))}
  </div>
  );
}

export default GuessResults;
