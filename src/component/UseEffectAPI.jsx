import React, { useEffect, useState } from "react";

function UseEffectAPI() {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);
  //map
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + content)
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
      <button onClick={() => setContent("posts")}>Posts</button>

      <button onClick={() => setContent("users")}>users</button>

      <button onClick={() => setContent("comments")}>comment</button>

      <h1>{content}</h1>

      <button onClick={() => setCount(count + 1)}>count{count}</button>

      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
    </>
  );
}

export default UseEffectAPI;
