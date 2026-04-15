import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      {count}
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => {
            setCount(count > 0 ? count - 1 : 0);
          }}
        >
          -
        </button>
        <button
          className="button"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
