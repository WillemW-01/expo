import { useState } from "react";
import "./workoutCard.css";
import Modal from "./Modal";

const WorkoutCard = (props) => {
  const [showPopUp, setShowPopup] = useState(false);
  const [cardData, setCardData] = useState({});

  return (
    <div className="card" onMouseDown={() => setShowPopup(true)}>
      <div className="titleContainer">
        <h3>{props.title}</h3>
        {props.lastPerformed ? <>Last rented: {props.lastPerformed}</> : <></>}
      </div>
      <div className="descriptionContainer">{props.desc}</div>
      {showPopUp ? (
        <Modal
          title={props.title}
          lastPerformed={props.lastPerformed}
          desc={props.desc}
          data={cardData}
          toggleShow={setShowPopup}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default WorkoutCard;
