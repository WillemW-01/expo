import React from "react";
import { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";
import {
  Box,
  Heading,
  FormField,
  TextInput,
  Button,
  Grommet,
  RadioButtonGroup,
} from "grommet";
import theme from "../grommet-theme.json";

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
  const [darkMode, setDarkMode] = useState("light");

  return (
    <Grommet
      full
      theme={theme}
      themeMode={darkMode === "dark" ? "dark" : "light"}
    >
      <Box direction="column" align="center" gap="small">
        <Heading level="1">Login</Heading>
        <Form method="POST">
          <FormField label="Username" align="center">
            <TextInput type="text" name="username" />
          </FormField>
          <FormField label="Password" align="center">
            <TextInput type="password" name="password" />
          </FormField>
          <Box gap="small" align="center" direction="row">
            <Button type="submit" label="Login" />
            <Link to="/register">
              <Button type="button" label="Create new profile" />
            </Link>
          </Box>
        </Form>
        <RadioButtonGroup
          name="theme-toggle"
          options={["light", "dark"]}
          value={darkMode}
          defaultValue="light"
          onChange={(event) => setDarkMode(event.target.value)}
          direction="row"
        />
      </Box>
    </Grommet>
  );
};

export default Login;
