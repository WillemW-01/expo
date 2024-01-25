import React from "react";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event, func) => {
    func(event.target.value);
  };

  const sendLogInData = () => {
    let userData = JSON.stringify({
      username: username,
      password: password,
      email: email,
    });

    console.log(userData);

    fetch("http://localhost:5173/gym/login", {
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
      <Form method="POST">
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
        <Link to="/register">
          <button type="button">Create new profile</button>
        </Link>
      </Form>
    </>
  );
};

export default Login;
