import { useState } from "react";
import "./home.css";

function Home() {
  const handleChange = (event, func) => {
    func(event.target.value);
  };

  return <>Welcome!</>;
}

export default Home;
