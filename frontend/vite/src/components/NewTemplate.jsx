import { Button, Form, FormField, Layer, TextInput } from "grommet";
import { useState } from "react";
export default function NewTemplate(props) {
  const [data, setData] = useState({});

  function saveTemplate(inputData) {
    // POST data to server
    console.log(data);
  }

  return (
    <Layer animate modal position="center">
      <Form
        align="center"
        value={data}
        onSubmit={() => {
          saveTemplate(data);
        }}
        onChange={(newData) => setData(newData)}
      >
        <FormField name="title" label="Name">
          <TextInput name="title" placeholder="Super Arms Day" />
        </FormField>
        <Button type="submit" label="Save" />
        <Button
          className="modal closeButton"
          label="X"
          onMouseDown={() => props.toggleShow(false)}
        />
      </Form>
    </Layer>
  );
}
