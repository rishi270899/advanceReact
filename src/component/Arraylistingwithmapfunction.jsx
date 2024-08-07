import React from "react";
import Table from "react-bootstrap/Table";

function Arraylistingwithmapfunction() {
  const students = [
    { name: "anil", email: "anil@gnail.com", phone: 111 },
    { name: "ram", email: "ram@gmauil.com", phone: 222 },
    { name: "raj", email: "raj@gmauil.com", phone: 333 },
    { name: "ravi", email: "ravi@gmauil.com", phone: 444 },
  ];
  return (
    <>
      <table className="table caption-top">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {students.map((data, i) => (
            <tr key={i}>
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

export default Arraylistingwithmapfunction;
