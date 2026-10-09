import React, { useId, useState } from "react";
import { useAuth } from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

export default function FormUseState() {
  //use Navigate
  const navigate = useNavigate();

  //use Id
  const userNameID = useId();
  const userPasswordID = useId();

  //use State
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  //handle submit
  function handleSubmit(event) {
    event.preventDefault();

    const success = login(userName, password);

    if (!success) {
      setError("Username or password is invalid!");
      return;
    }

    setError("");
    navigate("/");

    console.log("submitted!");
    console.log(userName, password);

    const body = {
      username: userName,
      password,
    };

    // fetch("https://fakestoreapi.com/auth/login", {
    //   method: "post",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
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
                      setUserName(event.target.value);
                    }}
                    type="text"
                    id={userNameID + "_id"}
                    value={userName}
                    className="form-control form-control-sm "
                    autoFocus
                    placeholder="Username"
                  />

                  <label htmlFor={userNameID + "_id"} className="">
                    User:
                  </label>
                  <div className="form-text text-secondary">
                    Username: admin
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
                  {error && <div className="text-danger mt-2">{error}</div>}
                  <label htmlFor={userPasswordID + "_id"} className="">
                    Password:
                  </label>
                  <div className="form-text text-secondary">Password: 123</div>
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
            This login form uses authentication context
          </div>
        </div>
      </div>
    </>
  );
}
