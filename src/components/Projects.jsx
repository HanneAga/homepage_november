import React from "react";
import q from "qjuul";
import "../style/Projects.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";

const Projects = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [projectBtn, setProjectBtn] = useState("project--btn__inactive");

  //Images pr page in Splideslide
  const ImgPrPage = (windowSize) => {
    if (windowSize < 1000) return 1;
    if (windowSize > 1000) return 2;
  };

  //Resize detector
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scrollValue = window.scrollY;
      if (scrollValue < 1025) setProjectBtn("project--btn__inactive");
      if (scrollValue > 1025) setProjectBtn("project--btn__active");
    });

    window.removeEventListener("scroll", function () {
      let scrollValue = window.scrollY;
      if (scrollValue < 1025) setProjectBtn("project--btn__inactive");
      if (scrollValue > 1025) setProjectBtn("project--btn__active");
    });

    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <q.div
      className="projects"
      co={"white"}
      he="100vh"
      w100
      fccc
      fsa
      id="projects"
    >
      <q.div
        className="projects-inner-container
      "
      >
        <q.div he="34px" pa="5px 20px" boRa="20px" className={projectBtn}>
          Prosjekter
        </q.div>
      </q.div>
      <q.div wi={"80%"} boRa="10px">
        <Splide
          className="slides"
          options={{
            type: "loop",
            perPage: ImgPrPage(windowSize),
            pagination: false,
            gap: "1em",
            focus: "center",
          }}
        >
          <SplideSlide className="slide">
            <a href="">
              <img src="/images/hjemmeside.png" alt="hjemmeside" />
            </a>
          </SplideSlide>
          <SplideSlide className="slide">
            <a href="https://github.com/HanneAga/Netflix-copy">
              <img src="/images/netflix-copy.png" alt="netflix-copy" />
            </a>
          </SplideSlide>
          <SplideSlide className="slide">
            <a href="https://github.com/HanneAga/SimpleDrumMachine">
              <img src={"/images/drumMachine.png"} alt="drum" />
            </a>
          </SplideSlide>
          <SplideSlide className="slide">
            <a href="https://github.com/HanneAga/filmdatabase">
              <img src={"/images/Svelte_movie.png"} alt="moviedatabase" />
            </a>
          </SplideSlide>
          <SplideSlide className="slide">
            <a href="https://github.com/HanneAga/peacefullogin">
              <img src={"/images/loginPage.png"} alt="login page" />
            </a>
          </SplideSlide>
          <SplideSlide className="slide">
            <a href="https://github.com/HanneAga/RockPaperScissors">
              <img src={"/images/JohnSnow_RPS.png"} alt="login page" />
            </a>
          </SplideSlide>
        </Splide>
      </q.div>
      <q.div frcc>Prosjektene er tilgjengelig på github</q.div>
    </q.div>
  );
};

export default Projects;
