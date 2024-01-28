import React from "react";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  console.log(userData);

  let response = await fetch("http://127.0.0.1:5173/gym/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    console.log("Success!");
    return redirect("/home");
  } else {
    let errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <Form method="POST">
        <fieldset>
          <legend>Username</legend>
          <input type="text" name="username" />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input type="text" name="email" />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="password" name="password" />
        </fieldset>
        <button type="submit">Register</button>
      </Form>
    </>
  );
};

export default Register;
