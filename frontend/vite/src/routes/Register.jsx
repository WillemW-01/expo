import React from "react";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";
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
  const [darkMode, setDarkMode] = useState("light");

  return (
    <Grommet
      full
      theme={theme}
      themeMode={darkMode === "dark" ? "dark" : "light"}
    >
      <Box direction="column" align="center" gap="small">
        <Heading level="1">Register</Heading>
        <Form method="POST">
          <Box>
            <FormField label="Username" align="center">
              <TextInput type="text" name="username" />
            </FormField>
            <FormField label="Email" align="center">
              <TextInput type="text" name="email" />
            </FormField>
            <FormField label="Password" align="center">
              <TextInput type="password" name="password" />
            </FormField>
            <Button type="submit" label="Register" fill={false} />
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

export default Register;
