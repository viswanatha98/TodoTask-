import React, { useState } from "react";
import LoginPage from "./LoginPage";
function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [Login, setLogin] = useState("true");
  function handleRegister(e) {
    e.preventDefault();
    if (!name || !username || !email || !contact || !password) {
      alert("A FIELD IS EMPTY");
    } else {
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Username", JSON.stringify(username));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Contact", JSON.stringify(contact));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved In Local Storage");
      alert("Registration Successful");
      setLogin(!Login);
    }
  }
  function moveToLogin() {
    setLogin(!Login);
  }
  return (
    <div class="container-fluid py-5 justify-content-center">
      {" "}
      {Login ? (
        <div class="container-fluid py-5 justify-content-center w-80">
          <h3 class="text-center">REGISTER HERE</h3>
          <form class="was-validated" onSubmit={handleRegister}>
            <div class="mb-3">
              <label for="Inputname" class="form-label">
                Your Name
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div class="mb-3">
              <label for="Inputusername" class="form-label">
                Username
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="name234"
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div class="mb-3">
              <label for="InputEmail" class="form-label">
                Email address
              </label>
              <input
                class="form-control"
                type="email"
                placeholder="example@gmail.com"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div class="mb-3">
              <label for="InputEmail1" class="form-label">
                Contact Number
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="9898989898"
                pattern="[6789][0-9]{9}"
                onChange={(event) => setContact(event.target.value)}
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
                placeholder="********"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div class="mb-3">
              <input
                class="form-control btn btn-success"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p class="float-end text-primary">
            Already Registred ! then{" "}
            <span class="text-danger" onClick={moveToLogin}>
              Login Now.
            </span>
          </p>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default RegisterPage;
