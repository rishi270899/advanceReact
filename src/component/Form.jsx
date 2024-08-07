import React, { useState } from "react";

function Form() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [city, setcity] = useState();
  const [address, setaddress] = useState();

  const insertData = (e) => {
    e.preventDefault();
    console.log(name, email, city, address);
  };

  return (
    <>
      <div className="signup-container d-flex justify-content-center align-items-center w-100 vh-100 bg_image">
        <div className="form-container p-4 rounded bg-white">
          <form onSubmit={insertData}>
            <h3 className="text-center mb-4">Form</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                placeholder="Enter Name"
                className="form-control"
                required
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                required
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="city"
                placeholder="Enter City"
                className="form-control"
                required
                onChange={(e) => setcity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="c" className="form-label">
                Address
              </label>
              <input
                type="address"
                placeholder="Enter Address"
                className="form-control"
                required
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>

            <div className="d-grid mb-3">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
