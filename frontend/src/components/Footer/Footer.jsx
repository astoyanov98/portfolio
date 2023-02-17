import React from "react";
import Logo from "../../images/logoWhite.png";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="imageFooter">
        <img height="150px" src={Logo} alt="" />
      </div>
      <div className="footerText">
        Living, learning, & leveling up <br /> one day at a time.
      </div>
      <div className="mt-5">
        <SocialIcon
          url="https://www.linkedin.com/in/alex-stoyanov-b5441618b/"
          bgColor="#6E07F3"
          fgColor="white"
          className="socialIcon"
        />
        <SocialIcon
          url="https://www.facebook.com/alex.stoqnov.54/"
          bgColor="#6E07F3"
          fgColor="white"
          className="socialIcon"
        />
        <SocialIcon
          url="https://github.com/astoyanov98"
          bgColor="#6E07F3"
          fgColor="white"
          className="socialIcon"
        />
      </div>
    </div>
  );
};

export default Footer;