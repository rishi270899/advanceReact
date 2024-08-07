import React, { useCallback, useState } from "react";
import ChilderComp from "./ChilderComp";

function UseCallBack() {
  const [count, setCount] = useState(0);
 console.log("parent rendered");

  const [count2, setCount2] = useState(0);

  const IncrementCount = useCallback(() => {
    setCount2((prevCount) => prevCount + 1);
    console.log("use call back hook");
  }, []);

  return (
    <>
      <div>
        <h1>use call back</h1>
        <h2>count 1 : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Inc Count</button>
        <br />
        <br />
        <br />
        <br />
        <h2>Count 2 : {count2}</h2>
        <ChilderComp Increment={IncrementCount} />

        {/* <ChilderComp Increment={IncrementCount}/> */}
      </div>
    </>
  );
}

export default UseCallBack;
