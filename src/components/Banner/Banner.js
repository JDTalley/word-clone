import React from "react";

function Banner({ gameState, guesses }) {
  let div;

  const tries = guesses.length;

  switch (gameState) {
    case 'win':
      div = 
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {' '}
            <strong>{tries} guesses</strong>.
          </p>
        </div>
        break;
    case 'lose':
      div =
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
        </div>
      break;
    case '':
      div = <div></div>
  }

  return (
    <div>
      {div}
    </div>
  );
}

export default Banner;
