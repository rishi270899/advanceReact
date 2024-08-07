import React, { useState } from "react";

function P() {
  const [name, setdata] = useState("rishi");
  const UpdateName = () => {
    setdata("Akarsh");
  };

  const NameUpdate = (a) => {
    setdata(a);
  };
  return (
    <>
      <h1>update name {name}</h1>
      <button onClick={UpdateName}>Change Name 1</button>
      <button onClick={() => setdata("Vinay")}>change name 2</button>
      <button onClick={() => NameUpdate("Prakhar")}>change name 3</button>
    </>
  );
}

export default P
