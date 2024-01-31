import React from "react";
import "./HomeHead.css";
import main from "./main.jpg";

function HomeHead() {
  return (
    <>
      <div className="head">
        <div className="container">
          <h1 className="main-head">
            Find the Perfect <span className="text-highlight">TUTORS</span>
            <br /> in your <br />
            <span className="text-highlight">SENIORS</span>
          </h1>
        </div>
        <div className="image">
          <img src={main} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomeHead;
