import React from "react";
import { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  console.log(userData);

  let response = await fetch("http://127.0.0.1:5173/gym/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    console.log("Yay!");
    return redirect("/home");
  } else {
    console.log(response);
    let errorMessage = await response.text();
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
}

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <Form method="POST">
        <fieldset>
          <legend>Username</legend>
          <input type="text" name="username" />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="password" name="password" />
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
