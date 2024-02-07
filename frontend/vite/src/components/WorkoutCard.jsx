import { useEffect, useState } from "react";
import "./workoutCard.css";
import Modal from "./Modal";
import {
  Box,
  Card,
  CardBody,
  Grommet,
  Heading,
  Paragraph,
  Text,
  defaultProps,
} from "grommet";

const WorkoutCard = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <Card
      direction="column"
      pad="small"
      background={{ color: "background" }}
      border={{ color: "background-contrast", style: "solid" }}
      hoverIndicator
      onMouseUp={() => {
        setShowPopUp(true);
      }}
      style={{
        cursor: "pointer",
        boxShadow: props.theme ? "#dedede33 2px 2px" : "#00000055 2px 2px",
      }}
      round="10px"
    >
      <CardBody>
        <Heading
          level="3"
          size="xsmall"
          textAlign="center"
          margin={{ top: "small", bottom: "none" }}
          color="brand-darker"
        >
          {props.title}
        </Heading>
        <Text textAlign="center" size="small">
          Last rented:
          {props.lastPerformed ? <> {props.lastPerformed}</> : <> Not yet</>}
        </Text>
      </CardBody>
      <Box>
        <Paragraph textAlign="center">{props.desc}</Paragraph>
      </Box>
      {showPopUp && (
        <Modal
          title={props.title}
          lastPerformed={props.lastPerformed}
          desc={props.desc}
          exercises={props.exercises}
          toggleShow={setShowPopUp}
        />
      )}
    </Card>
  );
};

export default WorkoutCard;
