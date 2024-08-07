import React, { useState } from "react";

function Incre_Dcre() {
  let [count, setCount] = useState(0);

  const inc = () => {
    setCount((count += 1));
  };

  const dec = () => {
    setCount(count > 0 ? (count -= 1) : alert("this is limit"));
  };

  return (
    <>
      <h1>{count}</h1>

      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </>
  );
}

export default Incre_Dcre;

