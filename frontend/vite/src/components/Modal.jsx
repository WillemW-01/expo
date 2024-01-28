import "./modal.css";
import { Layer, Box, Heading, Text, Button, Paragraph, Card } from "grommet";
import { Deploy } from "grommet-icons";
import ExerciseShort from "./ExerciseShort";
import { useEffect, useState } from "react";

export default function Modal(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch the data from the server
    setData([
      { title: "Bicep curl", sets: 4, reps: 4 },
      { title: "Bicep curl", sets: 4, reps: 4 },
      { title: "Bicep curl", sets: 4, reps: 4 },
      { title: "Bicep curl", sets: 4, reps: 4 },
    ]);
  }, []);

  return (
    <Layer animate modal position="center" round="3">
      <Box pad="medium" background={{ color: "background-front" }} round="3">
        <Box gap="none" basis="auto">
          <Heading
            level="3"
            textAlign="center"
            size="small"
            margin="none"
            color="brand-darker"
          >
            Fully Body 1
          </Heading>
          <Text textAlign="center" size="small">
            Last Rented: 2023/11/12
          </Text>
        </Box>
        {/* <Button
          className="modal closeButton"
          label="X"
          size="small"
          color={{ color: "background-front" }}
          onClick={() => {
            props.toggleShow(!props.shouldShow);
          }}
        /> */}
        <Paragraph margin="small">
          This is a short description of the workout.
        </Paragraph>
        <Box
          align="center"
          justify="center"
          pad="xsmall"
          fill="horizontal"
          gap="small"
        >
          {data.map((item) => (
            <ExerciseShort
              title={item.title}
              sets={item.sets}
              reps={item.reps}
            />
          ))}
        </Box>
      </Box>
    </Layer>
  );
}
