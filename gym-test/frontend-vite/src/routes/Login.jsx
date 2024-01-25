import React from "react";
import { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";
import ErrorPage from "../error-page";

export async function action({ request, params }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  console.log(userData);

  let response = await fetch("http://127.0.0.1:5173/gym/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: userData,
  });

  if (response.ok) {
    console.log(response);
    console.log("Yay!");
    return redirect("/home");
  } else {
    return <ErrorPage />;
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
