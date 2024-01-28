import { useEffect, useState } from "react";
import "./workoutCard.css";
import Modal from "./Modal";
import { Box, Card, Heading, Paragraph, Text } from "grommet";

const WorkoutCard = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    console.log(showPopUp);
  }, [showPopUp]);

  return (
    <Card
      direction="column"
      pad="small"
      background={{ color: "background-front" }}
      hoverIndicator
      onClick={() => {
        setShowPopUp(!showPopUp);
      }}
      style={{ cursor: "pointer" }}
    >
      <Box>
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
      </Box>
      <Box>
        <Paragraph textAlign="center">{props.desc}</Paragraph>
      </Box>
      {showPopUp && (
        <Modal
          title={props.title}
          lastPerformed={props.lastPerformed}
          desc={props.desc}
          data={cardData}
          toggleShow={setShowPopUp}
        />
      )}
    </Card>
  );
};

export default WorkoutCard;
