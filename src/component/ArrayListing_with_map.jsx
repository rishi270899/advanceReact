import React from "react";

function ArrayListing_with_map_function() {
  const student = [
    { name: "anil", email: "anil@gmail.com", phone: 11 },
    { name: "rohit", email: "rohit@gmail.com", phone: 12 },
    { name: "rahul", email: "rahul@gmail.com", phone: 13 },
    { name: "shubham", email: "shubham@gmail.com", phone: 14 },
  ];
  return (
    <>
      <table className="table caption-top">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {student.map((data, i) => (
            <tr key={i}>
              <td>{i++}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ArrayListing_with_map_function;