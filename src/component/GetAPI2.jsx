import React, { useEffect, useState } from "react";

function GetAPI2() {
  const [users, setusers] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:8000/api/getAlluser")
      .then((respons) => {
        return respons.json();
      })
      .then((data) => {
        setusers(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  console.log(users);

  return (
    <>
      <div>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default GetAPI2;
