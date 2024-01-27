import "./modal.css";

export default function Modal(props) {
  return (
    <div className="modalContainer">
      <div className="modalTitleContainer">
        <h3>{props.title}</h3>
        {props.lastPerformed ? <>Last rented: {props.lastPerformed}</> : <></>}
      </div>
      <button className="closeModal" onClick={() => props.toggleShow(false)}>
        X
      </button>
      <div className="descriptionContainer">{props.desc}</div>
    </div>
  );
}
