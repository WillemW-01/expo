import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(`sending request with: ${username}, ${password}`);

    fetch("http://localhost:8000/gym/csfr-cookie", {
      method: "GET",
      credentials: "include",
    }).then((response) => console.log(response));

    fetch("http://localhost:8000/gym/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application.json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
    }).then((response) => console.log(response));
    console.log(`Success! ${username}: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Submit" onPress={login} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});
