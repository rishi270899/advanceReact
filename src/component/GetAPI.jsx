import React, { useEffect, useState } from "react";

function GetAPI() {
  const [users, setusers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respons) => {
        return respons.json();
      })
      .then((data) => {
        setusers(data);
      });
  };
  useEffect(() => {
    fetchUserData()
  },[]);
  return (
    <>
      <div>
       {users.length > 0 && (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
       )}
      </div>
    </>
  );
}

export default GetAPI;
