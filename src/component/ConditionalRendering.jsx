import React from "react";

const MyFun = () => {
  let age = 20;
  if (age > 18) {
    return (
      <>
        <h1>Eligible For Vote</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Not Eligible For Vote</h1>
      </>
    );
  }
};

function ConditionalRendering() {
  let age = 30;
  let result;

  if (age > 18) {
    result = <h1> You can vote</h1>;
  } else {
    result = <h1>You can not vote</h1>;
  }

  return (
    <>
      <h1>hello {result}</h1>
      <MyFun />
      <div>
        {age > 18 ? (
          <h1>Eligible for vote</h1>
        ) : (
          <h1>Not Eligible for votes</h1>
        )}
      </div>
    </>
  );
}

export default ConditionalRendering;
