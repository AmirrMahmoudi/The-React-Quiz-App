import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import { type } from "@testing-library/user-event/dist/type";
/*
 npx json-server questions.json
*/
const initialState = {
  questions: [],
  //"Loading","error","ready","active","finished"
  status: "Loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        question: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action unkonwn");
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
};

export default App;
