import React, { useState } from "react";
import UseContext from "./component/hooks/UseContextHOOK/UseContext";
// import ContextAPI from "./component/hooks/ContextAPI/ContextAPI";
// import PropDrilling from "./component/hooks/PropDrilling.jsx/PropDrilling";
// import UseRef from "./component/hooks/UseRef";
// import UseCallBack from "./component/hooks/UseCallBack";

// import Incre_Dcre from "./component/Incre_Dcre";
// import TodoList from "./component/TodoList";
// import HandlingEvent from "./component/HandlingEvent";
// import DigitalClock from "./component/DigitalClock";
// import UseMemoHook from "./component/hooks/UseMemoHook";
// import ChildToParent from "./component/ChildToParent";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import AddTender from "./component/curd/AddTender";
// import ViewTender from "./component/curd/ViewTender";
// import DisplayTender from "./component/curd/DisplayTender";
// import UpdateTender from "./component/curd/UpdateTender";

// import ArrayListing_with_map_function from "./component/ArrayListing_with_map";

// import SendDataChildtoParent from "./component/SendDataChildtoParent";
// import ReUseComponent from "./component/ReUseComponent";
// import GetAPI2 from "./component/GetAPI2";
// import Form from "./component/Form";
// import GetAPI from "./component/GetAPI";
// import Arraylistingwithmapfunction from "./component/Arraylistingwithmapfunction";
// import UsersList from "./component/UsersList";
// import Form from "./component/Form";
// import UseEffectOne from "./component/hooks/UseEffectOne";
// import CardCom from "./component/CardCom";
// import ConditionalRendering from "./component/ConditionalRendering";
// import UseEffectAPI from "./component/UseEffectAPI";

// import UseEffect from "./component/hooks/UseEffect";
// import Crops from "./component/Crops";
// import Props from "./component/Props";
// import UseState from "./component/hooks/UseState";
// import UpdateVariable from "./component/UpdateVariable";
// import UseState from "./component/UseState";
// import P from "./component/P";
// import UseStateOne from "./component/UseStateOne";
// import Random from "./component/Random";
// import HideShowandToggle from "./component/HideShowandToggle";

// import UseeffectAPI2 from './component/UseeffectAPI2'
function App() {
  // function parentAlert(data){
  //   console.log(data)
  //   alert(data.name)

  // }

  // let data = "ravi"
  // const [count , setCount] = useState(0)

  // const [title, setName] = useState("raj");

  // reuse component in loop

  // const user = [
  //   {
  //     name: "anil",
  //     email: "anil@gmail.com",
  //     phone: 11111,
  //   },
  //   {
  //     name: "ram",
  //     email: "ram@gnail.com",
  //     phone: 22222,
  //   },
  //   {
  //     name: "ravi",
  //     email: "ravi@gnail.com",
  //     phone: 33333,
  //   },
  // ];

  // const route = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <DisplayTender />,
  //   },
  //   {
  //     path: "add",
  //     element: <AddTender />,
  //   },

  //   {
  //     path: "/edit/:id",
  //     element: <ViewTender />,
  //   },

  //   {
  //     path: "/update/:id",
  //     element: <UpdateTender />,
  //   },
  // // ]);

  return (
    <>

    <UseContext/>
      {/* <ContextAPI /> */}

      {/* <PropDrilling/> */}

      {/* <UseRef/> */}

      {/* <UseCallBack/> */}

      {/* <Incre_Dcre/> */}

      {/* <TodoList /> */}

      {/* <HandlingEvent/> */}
      {/* <DigitalClock/> */}
      {/* <UseMemoHook /> */}

      {/* <ChildToParent alert={parentAlert} /> */}

      {/* <RouterProvider router={route}></RouterProvider> */}

      {/* <Routes>
        <Route path="/" element={<ViewTender />} />
        <Route path="/DisplayTender" element={<DisplayTender />} />
        <Route path="/UpdateTender" element={<UpdateTender />} />
        <Route path="/AddTender" element={<AddTender />} />
      </Routes> */}

      {/* <ArrayListing_with_map_function/> */}

      {/* <SendDataChildtoParent/> */}
      {/* <h1>ReUse component with list </h1>

      {user.map((item) => (
        <ReUseComponent data={item} />
      ))} */}

      {/* <Form /> */}

      {/* <GetAPI2/> */}

      {/* <GetAPI/> */}
      {/* <Arraylistingwithmapfunction/> */}

      {/* <Form /> */}

      {/* <UsersList /> */}
      {/* <UseeffectAPI2 /> */}
      {/* <UseEffectAPI />  */}
      {/* <ConditionalRendering/> */}

      {/* <CardCom/> */}

      {/* <UseEffectOne/> */}
      {/* <UseEffect /> */}

      {/* <UseState /> */}

      {/* <UpdateVariable /> */}

      {/* <UseState /> */}

      {/* <P /> */}
      {/* <UseStateOne/> */}

      {/* <Random /> */}

      {/* <HideShowandToggle/> */}

      {/* <Crops />  */}
      {/* <Props d = {data}  c = {count}/>
    <button onClick={()=> setCount(count + 1)}>Update Count</button> */}
    </>
  );
}

export default App;
