import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining == 0) {
      setTimeRemaining(10)
      onAnswered(false)
      return}

    const countdown = setTimeout(() => {
      setTimeRemaining((sec) => sec - 1);
    }, 1000);

    return function cleanup() {
      clearTimeout(countdown)
    }
  }, [timeRemaining]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  // function timeManage (timeRemaining) {
  //   if (timeRemaining = 0) {
  //     setTimeRemaining(10)
  //     onAnswered(false)
  //     return timeRemaining + " seconds left"
  //   } else {
  //   return timeRemaining + " seconds left"
  // }}

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>
        {timeRemaining} seconds remaining
      </h5>
    </>
  );
}

export default Question;


// if timeremaining = 0, reset to 10, and do handleAnswer(false)