import { useState } from "react";
import "./workoutCard.css";
import Modal from "./Modal";
import { Box, Card, Heading } from "grommet";

const WorkoutCard = (props) => {
  const [showPopUp, setShowPopup] = useState(false);
  const [cardData, setCardData] = useState({});

  return (
    <Card
      border={{ color: "#dedede" }}
      pad="small"
      align="center"
      direction="column"
      onMouseDown={() => setShowPopup(true)}
      style={{ cursor: "pointer" }}
    >
      <Box className="titleContainer" gap="none">
        <Heading level="3" size="small">
          {props.title}
        </Heading>
        {props.lastPerformed ? <>Last rented: {props.lastPerformed}</> : <></>}
      </Box>
      <Box className="descriptionContainer">{props.desc}</Box>
      {showPopUp && (
        <Modal
          title={props.title}
          lastPerformed={props.lastPerformed}
          desc={props.desc}
          data={cardData}
          toggleShow={setShowPopup}
        />
      )}
    </Card>
  );
};

export default WorkoutCard;
