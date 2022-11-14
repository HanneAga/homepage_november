import React, { useState, useEffect } from "react";
import q from "qjuul";
import "../style/About.css";

const About = () => {
  const [aboutBtn, setAboutBtn] = useState("about--btn__inactive");
  const [gameBtn, setGameBtn] = useState("game--btn__inactive");
  ///put inn om meg knapp med en parallax effect , husk å lage en
  //active-om-meg og en inaactive om meg knapp som har transform translatex()(på begge)  og en transition.
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scrollValue = window.scrollY;

      if (scrollValue < 400) setAboutBtn("about--btn__inactive");
      if (scrollValue < 600) setGameBtn("game--btn__inactive");
      if (scrollValue > 400) setAboutBtn("about--btn__active");
      if (scrollValue > 600) setGameBtn("game--btn__active");
    });

    window.removeEventListener("scroll", function () {
      let scrollValue = window.scrollY;
      if (scrollValue < 400) setAboutBtn("about--btn__inactive");
      if (scrollValue < 600) setGameBtn("game--btn__inactive");
      if (scrollValue > 400) setAboutBtn("about--btn__active");
      if (scrollValue > 600) setGameBtn("game--btn__active");
    });
  });

  return (
    <q.div id="about" gap="30px" fccc fsb>
      <q.div
        pointer
        he="34px"
        pa="5px 20px"
        boRa="20px"
        frcc
        className={aboutBtn}
      >
        Om meg
      </q.div>
      <q.div className="about-box--experience" fccc gap="10px">
        <q.p>Frontendutvikler</q.p>
        <q.p>Wide Assessment AS</q.p>
        <q.p>1/2 år</q.p>
      </q.div>
      <q.div className="about-boxes--container" ma="35px">
        <q.div className="about-box">Bachelorgrad i Psykologi</q.div>
        <q.div className="about-box">Fagbrev i Filmproduksjon</q.div>
        <q.div className="about-box">Bachelorgrad i Engelsk</q.div>
      </q.div>
      <q.div
        pointer
        he="34px"
        pa="5px 20px"
        boRa="20px"
        frcc
        className={gameBtn}
      >
        Spill for å bli bedre kjent
      </q.div>
      <q.div className="press">Trykk på skjermen under</q.div>
      <q.div w100 he="100vh" frcc className="game">
        <iframe
          title="game"
          src="https://my.spline.design/homepageball-23232c223dbcdef8c6950d508239e35a/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </q.div>
    </q.div>
  );
};

export default About;
