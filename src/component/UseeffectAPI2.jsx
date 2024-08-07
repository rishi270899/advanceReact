import React, { useEffect, useState } from "react";

function UseeffectAPI2() {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);
  //map
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/getAlluser")
      .then((response) => response.json())
      //.then(json => console.log(json))
      .then((json) => setItems(json));
    console.log("ComponentDidUpdate"); //jab update hotanhai
    return () => {
      //cleaning
      console.log("Unmount");
    };
  }, [content]);
  console.log(items);

  return (
    <>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
    </>
  );
}

export default UseeffectAPI2;
