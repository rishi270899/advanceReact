import React, { useState } from "react";

function HandlingEvent() {
  const [bg, setBg] = useState("red");
  const [text, setText] = useState("click Here");
  const changeColor = () => {
    setBg("green");
    setText("changed");
  };

  const back = () => {
    setBg("red");
    setText("Click Here");
  };

  return (
    <>
      <h1>Change Color</h1>

      <div style={{ background: bg }} className="box">
        <button onClick={changeColor} onDoubleClick={back}>
          {text}
        </button>
      </div>
    </>
  );
}

export default HandlingEvent;
