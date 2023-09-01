import React, { useContext } from "react";
import { countContext } from "./App";

const CountTwo = () => {
  const countsTwo = useContext(countContext);

  return (
    <>
      <div>
        <h1> Reducer Count2 Is {countsTwo.countTwo.counterNumber}</h1>
        <button
          onClick={() =>
            countsTwo.countTwoDispatch({ type: "Increment", value: 1 })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            countsTwo.countTwoDispatch({ type: "Decrement", value: 1 })
          }
        >
          Subtract
        </button>
        <button
          onClick={() =>
            countsTwo.countTwoDispatch({ type: "Increment", value: 5 })
          }
        >
          Add by 5
        </button>
        <button
          onClick={() =>
            countsTwo.countTwoDispatch({ type: "Decrement", value: 5 })
          }
        >
          Subtract by 5
        </button>
        <button onClick={() => countsTwo.countTwoDispatch({ type: "Reset" })}>
          Reset
        </button>
      </div>
    </>
  );
};

export default CountTwo;
