import "./modal.css";
import { Layer, Box, Heading, Text, Button, Paragraph, Card } from "grommet";
import { Deploy } from "grommet-icons";
import ExerciseShort from "./ExerciseShort";
import { useEffect, useState } from "react";

export default function Modal(props) {
  return (
    <Layer animate position="center" style={{ borderRadius: "10px" }}>
      <Box
        pad="medium"
        background={{ color: "background-front" }}
        width={{ max: "large", min: "450px" }}
        round="10px"
      >
        <Box gap="none" basis="auto" align="center">
          <Heading
            level="2"
            textAlign="center"
            margin="none"
            color="brand-darker"
          >
            {props.title}
          </Heading>
          <Text textAlign="center" size="small">
            Last Rented:{" "}
            {props.lastPerformed ? props.lastPerformed : "Not yet."}
          </Text>
        </Box>
        <Button
          className="modal closeButton"
          label="X"
          size="small"
          color={{ color: "background-front" }}
          onMouseDown={() => {
            props.toggleShow(false);
          }}
        />
        <Paragraph margin="small" textAlign="center" fill="horizontal">
          {props.desc}
        </Paragraph>
        <Box
          align="center"
          justify="center"
          pad="xsmall"
          fill="horizontal"
          gap="small"
        >
          {props.exercises.map((item, index) => (
            <ExerciseShort key={index} title={item.name} sets={4} reps={4} />
          ))}
        </Box>
      </Box>
    </Layer>
  );
}
