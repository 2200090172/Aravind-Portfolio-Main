// import React from "react";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
// import {
//   faAngular,
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";
// import "./About.scss";
// import Loader from "react-loaders";

// const About = () => {
//   const [letterClass, setLetterClass] = useState("text_animate");

//   useEffect(() => {
//     setTimeout(() => {
//       setLetterClass("text_animate_hover");
//     }, 3000);
//   }, []);

//   return (
//     <>
//       <div className="container about_page">
//         <div className="text_zone">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
//               idx={15}
//             />
//           </h1>
//           <p>
//           👋 Hi, I'm Aravind, an engineer currently pursuing a degree in Computer Science and Information Technology at KL University. As a passionate cybersecurity aspirant, I am driven by a deep interest in problem-solving and analytical thinking. My technical expertise includes a strong foundation in AWS Cloud and Java full-stack development.          </p>
//           <p align="LEFT">
//             I'm a very ambitious software developer looking for a role in
//             an established company with the opportunity to work with the latest
//             technologies on challenging and diverse projects.
//           </p>
//           <p>
//           My unique approach to problem-solving and innovative thinking ✨ sets me apart, allowing me to bring fresh perspectives to any challenge. 🚀
//           </p>
          
//           <div className="flat_button">
//             <a target="_blank" href="/Aravind_resume.pdf">
//               RESUME
//             </a>
//           </div>
//         </div>

//         <div className="stage_cube_cont">
//           <div className="cubespinner">
//             <div className="face1">
//               <FontAwesomeIcon icon={faAngular} color="#DD0031" />
//             </div>
//             <div className="face2">
//               <FontAwesomeIcon icon={faHtml5} color="#F06529" />
//             </div>
//             <div className="face3">
//               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
//             </div>
//             <div className="face4">
//               <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
//             </div>
//             <div className="face5">
//               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
//             </div>
//             <div className="face6">
//               <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </>
//   );
// };

// export default About;
import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import "./About.scss";
import profileImage from '../../assets/images/Aravind-proffessional-photo2.png';

const About = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about_page">
        {/* Image Container */}
        <div className="image_container">
          <img src={profileImage} alt="Aravind" className="about_image" />
        </div>

        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            👋 Hi, I'm Aravind, an engineer currently pursuing a degree in
            Computer Science and Information Technology at KL University. As a
            passionate cybersecurity aspirant, I am driven by a deep interest in
            problem-solving and analytical thinking. My technical expertise
            includes a strong foundation in AWS Cloud and Java full-stack
            development.
          </p>
          <p align="LEFT">
            I'm a very ambitious software developer looking for a role in an
            established company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            My unique approach to problem-solving and innovative thinking ✨ sets
            me apart, allowing me to bring fresh perspectives to any challenge.
            🚀
          </p>

          <div className="flat_button">
            <a target="_blank" href="/Aravind_resume.pdf">
              RESUME
            </a>
          </div>
        </div>

        <div className="stage_cube_cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
