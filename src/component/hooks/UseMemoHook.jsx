import { useMemo, useState } from "react";

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  // function multiCount() {
  //     console.log("multiCount")
  //     return count * 5
  // }

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multuCount");
      return count * 5;
    },
    [count]
  );

  return (
    <>
      <h1>UseMemoHook</h1>
      <h1>Hooks in React : {count}</h1>
      <h1>Hooks in Item : {item}</h1>
      {/* <h1>{multiCount()}</h1> */}
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </>
  );
}

export default UseMemoHook;



