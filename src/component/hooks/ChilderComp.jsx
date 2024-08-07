import React, { memo } from "react";

function ChilderComp({ Increment }) {
  console.log("Childe rendred");
  return (
    <>
      <div>
        <h1>Childe Increment</h1>
        <button onClick={Increment}>Increment</button>
      </div>
    </>
  );
}

export default memo(ChilderComp);
