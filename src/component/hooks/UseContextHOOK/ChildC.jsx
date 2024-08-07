import React, { useContext } from "react";
import { Data, DataOne } from "./UseContext";

function ChildC() {
  const name = useContext(Data);
  const lastname = useContext(DataOne);
  return (
    <>
      <h1>
        child c {name} {lastname}
      </h1>
    </>
  );
}

export default ChildC;
