import { useState } from "react";

const useWordle = (solution: string | any) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["hello"]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // [{key: "a", color:"yellow"}] for example
  const formatGuess = () => {
    let solutionArray = [...solution];
    console.log(solutionArray);
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    // find any green letters
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i].includes(letter.key) && letter.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });
    return formattedGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct and increment turn state
  const addNewGuess = () => {};

  // handle keyup event and track current guess
  // if user types letter, handle it and store in some state.
  // if user presses enter, add the new guess to guesses state
  const handleKeyup = ({ key }: { key: any }) => {
    if (key === "Enter") {
      // only add guess if turn is less than 5
      // do not allow duplicate words and check if word is 5 characters long
      if (turn > 5) {
        console.log("you used all your guesses");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log("already tried");
        return;
      }

      if (currentGuess.length !== 5) {
        console.log("word must be 5 characters long");
        return;
      }

      const formatted = formatGuess();
      console.log(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
