import React from "react";
import { Link } from "react-router-dom";
import "./Arrival.css";

const Arrival = () => {
  return (
    <div className="arrival-container">
      <div className="overlay" />
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome to <span>ChatCafe! ☕</span></h1>
        <p className="welcome-subtitle">
          Connect, chat, and share moments with friends and loved ones — all in one cozy place.
        </p>
        <Link to="/home">
          <button className="get-started-btn">☕ Enter ChatCafe</button>
        </Link>
      </div>
    </div>
  );
};

export default Arrival;
