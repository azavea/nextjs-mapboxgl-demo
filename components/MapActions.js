import PropTypes from "prop-types";
import { useState } from "react";

import { useAppSelector, useAppDispatch } from "/app/hooks";
import {
  decrement,
  increment,
  setPage,
  selectCount,
  selectPage,
} from "/app/counterSlice";

const MapActions = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState("2");
  dispatch(setPage(2));
  return (
    <>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button onClick={() => dispatch(setPage(0))}>Set page 0</button>
      <button onClick={() => dispatch(setPage(1))}>Set page 1</button>
    </>
  );
};

export default MapActions;
