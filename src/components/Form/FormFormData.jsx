import React, { useId } from "react";
import { data } from "react-router-dom";

export default function FormFormData() {
  //useId for check boxs
  const rememberID = useId();
  const persianID = useId();
  const englishID = useId();
  const arabicID = useId();

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    //get all data
    const data = Object.fromEntries(fd.entries());
    console.log(data);

    console.log(fd.get("userName"));
    console.log(fd.get("password"));
    console.log(fd.get("confirmPassword"));
    console.log(fd.get("remember"));
    const languages = fd.getAll("language");
    data.language = languages;
  }
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div
            className=" bg-light shadow rounded-2 p-4 mt-4"
            style={{ width: "350px" }}
          >
            <h2 className="bg-warning mt-2 mb-4 fw-bold fs-4 d-flex justify-content-center border border-1 text-light p-2 rounded rounded-2">
              Register
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 mb-4">
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control form-control-sm "
                    autoFocus
                    placeholder="Username"
                    name="userName"
                  />

                  <label>User name:</label>
                </div>
                <div className="form-floating mb-2">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    name="password"
                  />
                  <label>Password:</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    name="confirmPassword"
                  />
                  <label>Confirm password:</label>
                </div>
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="remember"
                    name="remember"
                    id={rememberID}
                  />
                  <label
                    className="form-check-label text-primary"
                    htmlFor={rememberID}
                  >
                    Remember me
                  </label>
                </div>
                <label className="mb-1">Which languages can you speak?</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="english"
                    name="language"
                    id={englishID}
                  />
                  <label className="form-check-label" htmlFor={englishID}>
                    English
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="persian"
                    name="language"
                    id={persianID}
                  />
                  <label className="form-check-label" htmlFor={persianID}>
                    Persian
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="arabic"
                    name="language"
                    id={arabicID}
                  />
                  <label className="form-check-label" htmlFor={arabicID}>
                    Arabic
                  </label>
                </div>
              </div>

              <button className="btn btn-outline-success w-100">Submit</button>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="alert alert-secondary mt-4 p-2 small"
            style={{ width: "350px" }}
          >
            This register form develops by using FormData class for longer
            forms.
          </div>
        </div>
      </div>
    </>
  );
}
