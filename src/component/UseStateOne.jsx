import React, { useState } from "react";

function UseStateOne() {
  const [count, setcount] = useState(0);

  return (
    <>
      <div>UseStateOne</div>
      <p>You clicked {count} times</p>
      <button onClick={() => setcount(count + 1)}>click me</button>
    </>
  );
}

export default UseStateOne;
