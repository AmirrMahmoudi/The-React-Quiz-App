import React from "react";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  return (
    <>
      {index < numQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
      {index === numQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}{" "}
    </>
  );
};

export default NextButton;
