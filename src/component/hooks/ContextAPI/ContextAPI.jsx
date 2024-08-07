import { createContext } from "react";

import ChildC from "./ChildC";

const fname = createContext();
const lname = createContext();

function ContextAPI() {
  return (
    <>
      <h1>Context API</h1>
      <fname.Provider value={"Pninfosys"}>
        <lname.Provider value={"gwalior"}>
          <ChildC />
        </lname.Provider>
      </fname.Provider>
    </>
  );
}

export default ContextAPI;
export { fname, lname };
