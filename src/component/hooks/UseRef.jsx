import React, { useRef } from "react";

function UseRef() {
  let inputRef = useRef(null);
  function controlInput() {
    inputRef.current.focus();

  }
  return (
    <>
      <div className="App">
        <h1>useRef in React Js</h1>
        <input type="text" ref={inputRef} />
        <button onClick={controlInput}>Handle Input</button>
      </div>
    </>
  );
}
export default UseRef;

