import React, { useActionState, useId } from "react";

export default function FormUseAction() {
  //useId for check box

  const rememberID = useId();

  async function handleAction(prevState, formData) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const userName = formData.get("userName");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const remember = formData.get("remember");
    //get all
    console.log(formData);

    //get one by one
    console.log(formData.get("userName"));
    console.log(formData.get("password"));
    console.log(formData.get("confirmPassword"));
    console.log(formData.get("remember"));

    //create new array
    const errors = [];
    //validation
    if (userName.trim.length == 0) {
      errors.push("Please enter data");
    }

    //check errors array and if it is full show the error
    if (errors.length > 0) {
      return {
        errors,
        previousValues: {
          userName,
          password,
          confirmPassword,
          remember,
        },
      };
    }
  }

  //use a new hook called useActionState
  const [formState, formAction, isPending] = useActionState(handleAction, {
    errors: null,
  });
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div
            className=" bg-light shadow rounded-2 p-4 mt-4"
            style={{ width: "350px" }}
          >
            <h2 className="bg-secondary mt-2 mb-4 fw-bold fs-4 d-flex justify-content-center border border-1 text-light p-2 rounded rounded-2">
              Register
            </h2>
            <form action={formAction}>
              <div className="mt-4 mb-4">
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control form-control-sm "
                    autoFocus
                    placeholder="Username"
                    name="userName"
                    defaultValue={formState.previousValues?.userName}
                  />

                  <label>User name:</label>
                </div>
                <div className="form-floating mb-2">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    name="password"
                    defaultValue={formState.previousValues?.password}
                  />
                  <label>Password:</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    name="confirmPassword"
                    defaultValue={formState.previousValues?.confirmPassword}
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
                    defaultChecked={formState.previousValues?.remember}
                  />
                  <label
                    className="form-check-label text-primary"
                    htmlFor={rememberID}
                  >
                    Remember me
                  </label>
                </div>
                {formState.errors && (
                  <div className="alert alert-danger">
                    {formState.errors.map((e) => (
                      <div key={e}>{e}</div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="btn btn-outline-success w-100"
                disabled={isPending}
              >
                {!isPending ? "Submit" : null}
                {isPending && (
                  <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div
                      class="spinner-border ms-auto"
                      role="status"
                      aria-hidden="true"
                    ></div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="alert alert-secondary mt-4 p-2 small"
            style={{ width: "350px" }}
          >
            This register form develops by useActionState
          </div>
        </div>
      </div>
    </>
  );
}
