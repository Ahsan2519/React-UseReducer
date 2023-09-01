import React, { useContext } from "react";
import CountTwo from "./CountTwo";
import { countContext } from "./App";

const Counter = () => {
  const counts = useContext(countContext);

  return (
    <>
      <div>
        <h1> Reducer Count1 Is {counts.countOne.counterNumber}</h1>

        <button
          onClick={() =>
            counts.countOneDispatch({ type: "Increment", value: 1 })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            counts.countOneDispatch({ type: "Decrement", value: 1 })
          }
        >
          Subtract
        </button>
        <button
          onClick={() =>
            counts.countOneDispatch({ type: "Increment", value: 5 })
          }
        >
          Add by 5
        </button>
        <button
          onClick={() =>
            counts.countOneDispatch({ type: "Decrement", value: 5 })
          }
        >
          Subtract by 5
        </button>
        <button onClick={() => counts.countOneDispatch({ type: "Reset" })}>
          Reset
        </button>
      </div>
      <CountTwo />
    </>
  );
};

export default Counter;
