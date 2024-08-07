import React, { useState } from "react";

function UseState() {
  const [data, setdata] = useState("ram");

  const UpdateData = () => {
    setdata("rohit");
  };
  const updateVariable = (a) => {
    setdata(a);
  };

  console.log("render");
  return (
    <>
      <h1> use state {data}</h1>

      <button onClick={UpdateData}>update data 1</button>
      <button onClick={() => setdata("raj")}>update data 2 </button>
      <button onClick={() => updateVariable("pn")}>update data 3 </button>
    </>
  );
}

export default UseState;
