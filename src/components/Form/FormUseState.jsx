import React, { useId, useState } from "react";

export default function FormUseState() {
  //use Id
  const userNameID = useId();
  const userPasswordID = useId();

  //use State
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //handle submit
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submited!");
    console.log(name, password);

    const body = {
      username: name,
      password,
    };

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
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div
            className=" bg-light shadow rounded-2 p-4 mt-4"
            style={{ width: "350px" }}
          >
            <h2 className="bg-primary mt-2 mb-4 fw-bold fs-4 d-flex justify-content-center border border-1 text-light p-2 rounded rounded-2">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 mb-4">
                <div className="form-floating mb-3">
                  <input
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    type="text"
                    id={userNameID + "_id"}
                    value={name}
                    className="form-control form-control-sm "
                    autoFocus
                    placeholder="Username"
                  />

                  <label htmlFor={userNameID + "_id"} className="">
                    User:
                  </label>
                  <div className="form-text text-secondary">
                    Username: mor_2314
                  </div>
                </div>

                <div className="form-floating">
                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    type="password"
                    id={userPasswordID + "_id"}
                    value={password}
                    className="form-control form-control-sm"
                    placeholder="Password"
                  />
                  <label htmlFor={userPasswordID + "_id"} className="">
                    Password:
                  </label>
                  <div className="form-text text-secondary">
                    Password: 83r5^_
                  </div>
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
            endpoint using useState hook.
          </div>
        </div>
      </div>
    </>
  );
}
