import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  function handleOnChange(e) {
    if (e.target.value.length > 5) {
      return;
    }

    const newGuess = e.target.value.toUpperCase();
    setGuess(newGuess);
  }

  function handleOnSubmit(e) {
    if (guess < 5) {
      return;
    }
    e.preventDefault();

    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        pattern="[A-Za-z]{5}"
        value={guess}
        title="Five letter guess"
        disabled={disabled}
        onChange={handleOnChange} />
    </form>
  );
}

export default GuessInput;
