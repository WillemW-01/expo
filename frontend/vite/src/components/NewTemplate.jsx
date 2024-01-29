import {
  Button,
  Form,
  FormField,
  Layer,
  TextInput,
  Heading,
  SelectMultiple,
  Box,
  TextArea,
} from "grommet";
import { useState } from "react";
export default function NewTemplate(props) {
  const [data, setData] = useState({});

  function saveTemplate() {
    // POST data to server
    console.log("Sending data to server:");
    console.log(data);

    fetch("http://127.0.0.1:5173/gym/new-template", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <Layer animate modal position="center" background={"background-front"}>
      <Form
        align="center"
        value={data}
        onSubmit={() => {
          saveTemplate();
        }}
        onChange={(newData) => setData(newData)}
      >
        <Box justify="start" direction="column" gap="small" pad="medium">
          <Heading level="3">
            <TextInput
              name="title"
              placeholder="Super Arms Day"
              value={data.title}
            />
          </Heading>
          <TextArea
            name="description"
            resize="vertical"
            placeholder="enter short description"
          />
          <SelectMultiple
            name="selection"
            showSelectedInline
            options={["Bicep Curl", "Leg Curl"]}
          />
          <Button type="submit" label="Save" />
          <Button
            className="modal closeButton"
            label="X"
            onMouseDown={() => props.toggleShow(false)}
          />
        </Box>
      </Form>
    </Layer>
  );
}
