import React from "react";
import q from "qjuul";
import "../style/Footer.css";

const Footer = () => {
  return (
    <q.div id="footer" he="30vh" w100 fccc gap="30px">
      <q.div>Hanne Aga 2022</q.div>
      <q.div> Hannekarineaga@gmail.com</q.div>
      <q.div>
        <q.div className="some--bottom" gap="10px" pointer>
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
    </q.div>
  );
};

export default Footer;
