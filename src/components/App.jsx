import React, { useReducer } from "react";
import "../assets/App.css";
import Counter from "./Counter";
export const countContext = React.createContext();

const initialState = {
  counterNumber: 0,
};

const reducur = (state, action) => {
  if (action.type === "Increment") {
    return { counterNumber: state.counterNumber + action.value };
  } else if (action.type === "Decrement") {
    return { counterNumber: state.counterNumber - action.value };
  } else if (action.type === "Reset") {
    return { counterNumber: 0 };
  } else {
    return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducur, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducur, initialState);
  return (
    <countContext.Provider
      value={{
        countOne: count,
        countOneDispatch: dispatch,
        countTwo: countTwo,
        countTwoDispatch: dispatchTwo,
      }}
    >
      <div className="App">
        <Counter />
      </div>
    </countContext.Provider>
  );
}

export default App;
