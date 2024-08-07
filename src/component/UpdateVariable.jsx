import React from "react";

function UpdateVariable() {
  let data = "ram kumar";

  const updateData = () => {
    let data = "raj";
    alert(data);
  };

  console.log("render component");
  return (
    <>
      <h1>update variable {data}</h1>
      <button onClick={updateData}>Update Data</button>
    </>
  );
}

export default UpdateVariable;
