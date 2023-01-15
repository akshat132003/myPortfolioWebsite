import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <LinkedInIcon />
        <MailIcon />
      </div>
      <p> &copy; 2022 akshatbarwal.com</p>
    </div>
  );
}

export default Footer;
