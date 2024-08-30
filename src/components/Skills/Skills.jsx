import React from "react";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faJava,
  faGithub,
  faNodeJs,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container skills_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
          </h1>
          <p>
            I am a "PROGRAMMER" and I like to code in 
            <span class="tech_tag"> Java 11</span>,
            <span class="tech_tag"> HTML5</span>,
            <span class="tech_tag"> CSS3</span>,
            <span class="tech_tag"> SpringBoot</span>,
            <span class="tech_tag"> React</span>,
            <span class="tech_tag"> Node.js</span>,
            <span class="tech_tag"> Git</span>,
          </p>
          <p>
          As a passionate web developer, I specialize in crafting sophisticated, visually compelling websites that merge functionality with an outstanding user experience. I thrive on tackling intricate problems and developing inventive solutions that push the boundaries of web development. With a deep understanding of algorithms and an unyielding drive to stay ahead of industry trends, I approach each project with enthusiasm and a commitment to delivering exceptional results.          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/chowta-aravind-920065271/"
            >
              {" "}
              LinkedIn{" "}
            </a>
            
            profile for more details.
          </p>
        </div>

        <div className="logos_container">
          <div className="logos">
            <p>
              <FontAwesomeIcon icon={faJava} color="#EFD81D" />
            </p>
            <p>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </p>
            <p>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </p>
            <p>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </p>
            <p>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} color="#050505" />
            </p>
            <p>
              <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
            </p>
            <p>
              <FontAwesomeIcon icon={faStackOverflow} color="#cc5500" />
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
