import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event, func) => {
    func(event.target.value);
  };

  const login = () => {
    let userData = JSON.stringify({
      username: username,
      password: password,
      email: email,
    });

    console.log(userData);

    fetch("http://127.0.0.1:5173/gym/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    })
      .then((res) => res.json()) // get the response as JSON
      .then((data) => {
        console.log(data); // the data from the Django server
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const register = () => {
    let userData = JSON.stringify({
      username: username,
      password: password,
      email: email,
    });

    console.log(userData);

    fetch("http://127.0.0.1:5173/gym/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    })
      .then((res) => res.json()) // get the response as JSON
      .then((data) => {
        console.log(data); // the data from the Django server
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <fieldset>
          <legend>Username</legend>
          <input
            type="text"
            value={username}
            onChange={(e) => handleChange(e, setUsername)}
          />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input
            type="password"
            value={password}
            onChange={(e) => handleChange(e, setPassword)}
          />
        </fieldset>
        <button type="submit">Login</button>
      </form>

      <h1>Register</h1>
      <form onSubmit={register}>
        <fieldset>
          <legend>Username</legend>
          <input
            type="text"
            value={username}
            onChange={(e) => handleChange(e, setUsername)}
          />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input
            type="text"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
          />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input
            type="password"
            value={password}
            onChange={(e) => handleChange(e, setPassword)}
          />
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
