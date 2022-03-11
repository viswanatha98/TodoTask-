import React, { useState } from "react";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
function LoginPage() {
  const [usernamelog, setUsernamelog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [Register, setRegister] = useState("true");
  const [Home, setHome] = useState("true");

  function handleLogin(e) {
    e.preventDefault();
    let user = localStorage.getItem("Username").replace(/"/g, "");
    let pswd = localStorage.getItem("Password").replace(/"/g, "");
    if (!usernamelog || !passwordlog) {
      alert("A FIELD IS EMPTY");
    } else if (usernamelog === user && passwordlog === pswd) {
      alert("Login Success");
      setHome(!Home);
    } else {
      alert("Invalid Inputs ! Try Again");
    }
  }
  function moveToRegister() {
    setRegister(!Register);
  }
  return (
    <div>
      {" "}
      {Home ? (
        <div class="container-fluid py-5 justify-content-center">
          {" "}
          {Register ? (
            <div class="container-fluid py-5 justify-content-center w-80">
              <h3 class="text-center">LOGIN HERE</h3>
              <form class="was-validated" onSubmit={handleLogin}>
                <div class="mb-3">
                  <label for="InputEmail1" class="form-label">
                    Username
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="name234"
                    onChange={(event) => setUsernamelog(event.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="InputPassword" class="form-label">
                    Password
                  </label>
                  <input
                    class="form-control"
                    type="password"
                    placeholder="........"
                    onChange={(event) => setPasswordlog(event.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    class="form-control btn btn-success"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p class="float-start text-primary">
                New to this ? then{" "}
                <span class="text-danger" onClick={moveToRegister}>
                  Create Account Now.
                </span>
              </p>
            </div>
          ) : (
            <RegisterPage />
          )}
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default LoginPage;
