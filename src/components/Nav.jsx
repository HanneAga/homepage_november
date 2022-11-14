import React, { useState } from "react";
import q from "qjuul";
import "../style/Nav.css";

const Nav = () => {
  const [burgerActive, setBurgerActive] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  //burger active/inactive
  const burgerClick = () => {
    setBurgerActive(!burgerActive);
  };

  //Set active and move to active part of page
  var element1 = document.getElementById("main");
  var element2 = document.getElementById("about");
  var element3 = document.getElementById("projects");
  var element4 = document.getElementById("footer");

  const handleOnClickMain = () => {
    var element1 = document.getElementById("main");
    element1.scrollIntoView({ behavior: "smooth" }) &&
      setBurgerActive(burgerActive);
    setActiveIndex(0);
  };

  const handleOnClickAbout = () => {
    var element2 = document.getElementById("about");
    element2.scrollIntoView({ behavior: "smooth" }) &&
      setBurgerActive(burgerActive);
    setActiveIndex(1);
  };

  const handleOnClickProjects = () => {
    var element3 = document.getElementById("projects");
    element3.scrollIntoView({ behavior: "smooth" }) &&
      setBurgerActive(burgerActive);
    setActiveIndex(2);
  };

  const handleOnClickContact = () => {
    var element4 = document.getElementById("footer");
    element4.scrollIntoView({ behavior: "smooth" }) &&
      setBurgerActive(burgerActive);
    setActiveIndex(3);
  };

  return (
    <q.div id="nav" pa="60px 60px 0 60px" w100 po={"fixed"} z="10">
      <q.div>
        <q.div className="nav_all-items" frcc fsb>
          <q.div className="nav__icons" w100 f1 frcl gap="35px">
            <q.div className="some" he="60px" frcl gap="10px">
              <a href="https://github.com/HanneAga">
                <img
                  className="github"
                  src="/images/github2.png"
                  alt="Github logo"
                />
              </a>
              <a href="https://www.linkedin.com/in/hanne-aga-804756135/">
                <img
                  className="linkedin"
                  src="/images/linkedin.png"
                  alt="LinkedIn logo"
                />
              </a>
            </q.div>
          </q.div>
          <q.ul
            className={burgerActive ? "nav__items" : "nav__active"}
            po="relative"
            w100
            boRa="10px"
            f1
            pa="10px"
            frcr
          >
            <q.li
              className={activeIndex === 0 ? "active" : "inactive"}
              key="0"
              onClick={() => handleOnClickMain()}
              lsSt="none"
            >
              HJEM
            </q.li>
            <q.li
              className={activeIndex === 1 ? "active" : "inactive"}
              key="1"
              onClick={() => handleOnClickAbout()}
              lsSt="none"
              nowrap
            >
              OM MEG
            </q.li>
            <q.li
              className={activeIndex === 2 ? "active" : "inactive"}
              key="2"
              onClick={() => handleOnClickProjects()}
              lsSt="none"
            >
              PROSJEKTER
            </q.li>
            <q.li
              className={activeIndex === 3 ? "active" : "inactive"}
              key="3"
              onClick={() => handleOnClickContact()}
              lsSt="none"
            >
              KONTAKT
            </q.li>
          </q.ul>
        </q.div>

        <q.div
          className={burgerActive ? "burger--normal" : "burger--crossed"}
          key="4"
          onClick={burgerClick}
        >
          <q.div className="line1"></q.div>
          <q.div className="line2"></q.div>
          <q.div className="line3"></q.div>
        </q.div>
      </q.div>
    </q.div>
  );
};

export default Nav;
