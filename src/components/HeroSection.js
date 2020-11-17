import React from "react";
import "../Routes/App.css";
import { Button } from "./Buttlon";
import "../components/HeroSection.css";

function HeroSection() {
  return (
    // "PageclassName is an invalid way to name an element. To name an element its just "className" "
    <div PagesclassName="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>WELCOME TO HEADSTART </h1>
      <p> Let's take a look around </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
