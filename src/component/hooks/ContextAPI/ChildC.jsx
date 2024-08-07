import React from "react";
import { fname, lname } from "./ContextAPI";

function ChildC() {
  return (
    <>
      <h1>Child C</h1>
      <fname.Consumer>
        {
        (fname) => {
          return (
            <lname.Consumer>
              {(fname) => {
                return (
                  <h1>
                    My name is {fname} last {lname}
                  </h1>
                );
              }}
            </lname.Consumer>
          );
        }}
      </fname.Consumer>
    </>
  );
}

export default ChildC;
