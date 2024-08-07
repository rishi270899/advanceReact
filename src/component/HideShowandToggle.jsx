import React, { useState } from "react";

function HideShowandToggle() {
  const [status, setStatus] = useState(true);
  return (
    <>
      <div>HideShowandToggle</div>

      <h1>Hide , show and toggle in element ya tag </h1>

      <center>{status ? <h1> hello world</h1> : null}</center>

      <button onClick={() => setStatus(false)}>Hide</button>
      <br />
      <br />
      <br />

      <button onClick={() => setStatus(true)}>show</button>
      <br />
      <br />
      <br />
      {/* Toggle */}

      <button onClick={() => setStatus(!status)}>Toggle</button>
    </>
  );
}

export default HideShowandToggle;
