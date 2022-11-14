import React from "react";
import q from "qjuul";
import "../style/Main.css";

const Main = () => {
  return (
    <q.div id="main" w100 he="100vh">
      <q.div className="unique" he="60px" frcc>
        Unik faglig bakgrunn
      </q.div>
      <q.div className="header__wave__container" vw100 vh100>
        <q.img
          w100
          he="70%"
          src="/images/header-wave3.png"
          alt="svg of a wave"
        />
      </q.div>
      <q.div fccc className="header--text-and--pic" po="absolute" gap="35px">
        <q.div frcc gap="35px" fw>
          {" "}
          <q.div className="header--pic">
            <img
              width="230px"
              src="/images/profilbilde3.png"
              alt="profilbilde"
            />
          </q.div>
          <q.div className="header--text" fccc foSi="24px" gap="10px">
            <q.div fccl>
              <q.p padding-top="80px"> HANNE AGA</q.p>
              <q.p> FRONTENDUTVIKLER</q.p>
            </q.div>
            <q.div
              fccc
              className="header-icons"
              he={"30%"}
              fw
              boRa={"10px"}
              gap="15px"
            >
              <q.div className="main-icons" gap={"10px"} frcc>
                <img src="/images/javascript.png" alt="JS logo" />
                <img src="/images/html.png" alt="html logo" />
                <img className="css" src="/images/css.png" alt="css logo" />
                <img src="/images/react.png" alt="react logo" />
              </q.div>

              <q.div className="secondary-icons" gap={"10px"} frcc>
                <img src="/images/typescript.png" alt="typescript logo" />
                <img src="/images/redux.png" alt="redux logo" />
                <img src="/images/figma.png" alt="figma logo" />
                <img src="/images/storybook.png" alt="storybook logo" />
              </q.div>
            </q.div>
          </q.div>
        </q.div>
      </q.div>
    </q.div>
  );
};

export default Main;
