import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Akshat</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <GitHubIcon />
          <LinkedInIcon />
          <MailIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap;</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB;</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, JavaScript;</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
