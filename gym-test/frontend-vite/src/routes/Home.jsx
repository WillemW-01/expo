import { useState } from "react";
import "./home.css";
import WorkoutCard from "../components/WorkoutCard";
// import GrommetTemplate from "../components/GrommetTemplate";

function Home() {
  return (
    <>
      <h1>Rented Fitness</h1>
      <div className="buttonContainer">
        <button>Start empty workout</button>
        <button>Create new template</button>
      </div>
      <h2>Template workouts</h2>
      <div className="templateWorkouts">
        <WorkoutCard
          title="Full body 1"
          desc="Full body workout day 1"
          lastPerformed="2023/11/02"
        />
        <WorkoutCard title="Full body 2" desc="Full body workout day 1" />
        <WorkoutCard title="Full body 3" desc="Full body workout day 1" />
        <WorkoutCard title="Arms" desc="Full body workout day 1" />
      </div>
      {/* <GrommetTemplate /> */}
    </>
  );
}

export default Home;
