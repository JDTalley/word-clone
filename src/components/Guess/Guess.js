import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../../src/game-helpers";

function Cell({ letter, status }) {
  const className = status
    ? `cell ${status}`
    : `cell`;

    return <span className={className}>{letter}</span>
}

function Guess({ guess, answer }) {
  const letters = range(5);

  let result = checkGuess(guess, answer);
  
  return (
    <p className="guess">
      {letters.map((index) => (
        <Cell 
          key={index} 
          letter={result ? result[index].letter : undefined} 
          status={result ? result[index].status : undefined} />
      ))}
    </p>
  );
}

export default Guess;
