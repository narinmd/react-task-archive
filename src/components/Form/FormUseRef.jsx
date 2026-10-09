import React, { useId, useRef } from "react";

export default function FormUseRef() {
  //use id
  const userNameID = useId();
  const userPasswordID = useId();

  //use ref
  const userName = useRef();
  const userPassword = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const body = {
      username: userName.current.value,
      password: userPassword.current.value,
    };
    console.log(body);

    fetch("https://fakestoreapi.com/auth/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div
          className=" bg-light shadow rounded-2 p-4 mt-4"
          style={{ width: "350px" }}
        >
          <h2 className="bg-info mt-2 mb-4 fw-bold fs-4 d-flex justify-content-center border border-1 text-light p-2 rounded rounded-2">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 mb-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id={userNameID + "_id"}
                  className="form-control form-control-sm "
                  autoFocus
                  placeholder="Username"
                  ref={userName}
                />

                <label htmlFor={userNameID + "_id"} className="">
                  User name:
                </label>
                <div className="form-text text-secondary">
                  Username: mor_2314
                </div>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  id={userPasswordID + "_id"}
                  className="form-control form-control-sm"
                  placeholder="Password"
                  ref={userPassword}
                />
                <label htmlFor={userPasswordID + "_id"} className="">
                  Password:
                </label>
                <div className="form-text text-secondary">Password: 83r5^_</div>
              </div>
            </div>

            <button className="btn btn-outline-success w-100">Login</button>
            {/* <input type="submit" value={}/> */}
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="alert alert-secondary mt-4 p-2 small"
          style={{ width: "350px" }}
        >
          This login form sends user data to the FakeStore API authentication
          endpoint using useRef hook.
        </div>
      </div>
    </div>
  );
}
