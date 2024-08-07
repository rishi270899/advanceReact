import React from "react";

function ChildToParent(props) {
  const data = { name: "ram", email: "ram@gmail.com" };
  return (
    <>
      <h2>user name : </h2>
      <button onClick={() => props.alert(data)}>Click me</button>
    </>
  );
}

export default ChildToParent;
