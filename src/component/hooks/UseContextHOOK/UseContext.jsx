import { createContext } from "react";
import ChildA from "./ChildA";
import ChildC from "./ChildC";


const Data = createContext();
const DataOne = createContext();

function UseContext() {
  return (
    <>
      <h1>use context hook</h1>
      <Data.Provider value={"pninfosys"}>
        <DataOne.Provider value={"gwalior"}>
          <ChildC />
        </DataOne.Provider>
      </Data.Provider>
    </>
  );
}

export default UseContext;
export { Data, DataOne };
