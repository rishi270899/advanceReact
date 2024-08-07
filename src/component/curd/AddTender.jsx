import React from "react";

function AddTender() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 vh-100 bg_image">
        <div className="form-container p-4 rounded bg-white">
          <form action="" method="post">
            <h3 className="text-center mb-4">Add Tender...</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Description
              </label>
              <input
                type="text"
                placeholder="Enter Description"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmpassword" className="form-label">
                Start Time
              </label>
              <input
                type="date"
                name="Start time"
                placeholder=""
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmpassword" className="form-label">
                End Time
              </label>
              <input
                type="date"
                name="End time"
                placeholder=""
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmpassword" className="form-label">
                Buffer Time
              </label>
              <input
                type="time"
                name="Buffer Time"
                placeholder=""
                className="form-control"
                required
              />
            </div>

            <div className="d-grid mb-3">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p className="text-end mt-2">
              Forget <a href="">password</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTender;
