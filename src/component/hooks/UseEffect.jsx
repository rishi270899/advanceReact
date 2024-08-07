import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState(100);

useEffect(()=>{
    console.log("hello useEffect")
},[])

  return (
    <>
      <p>You clicked {count} times</p>
      <p>You clicked {data} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setdata(data + 1)}>Click Data</button>
    </>
  );
}

export default UseEffect;