import "./workoutCard.css";

const WorkoutCard = (props) => {
  return (
    <div className="card">
      <div className="titleContainer">
        <h3>{props.title}</h3>
        {props.lastPerformed ? (
          <p>Last rented: {props.lastPerformed}</p>
        ) : (
          <></>
        )}
      </div>
      <div className="descriptionContainer">{props.desc}</div>
    </div>
  );
};

export default WorkoutCard;
