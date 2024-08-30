// // import React from "react";
// // import { useEffect, useState, useRef } from "react";
// // import emailjs from "@emailjs/browser";
// // import Loader from "react-loaders";
// // import "./Contact.scss";
// // import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
// // import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// // const Contact = () => {
// //   const [letterClass, setLetterClass] = useState("text_animate");

// //   const form = useRef();

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setLetterClass("text_animate_hover");
// //     }, 3000);
// //   }, []);

// //   const sendEmail = (e) => {
// //     e.preventDefault();
// //     console.log(form.current);
// //     emailjs
// //       .sendForm(
// //         process.env.REACT_APP_EMAILJS_SERVICE_ID,
// //         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
// //         form.current,
// //         process.env.REACT_APP_EMAILJS_USER_ID
// //       )
// //       .then(
// //         () => {
// //           alert("Message successfully sent!");
// //           window.location.reload(false);
// //         },
// //         (error) => {
// //           console.error("Failed to send the message:", error);
// //           alert("Failed to send the message, please try again");
// //         }
// //       );
// //   };
  

// //   return (
// //     <>
// //       <div className="container contact_page">
// //         <div className="text_zone">
// //           <h1>
// //             <AnimatedLetters
// //               letterClass={letterClass}
// //               strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
// //               idx={15}
// //             />
// //           </h1>
// //           <p>
// //             Want to connect? My inbox is always open! Don't hesitate to contact
// //             me using below form either.
// //           </p>

// //           {/* CONTACT FORM SECTION */}

// //           <div className="contact_form">
// //             <form ref={form} onSubmit={sendEmail}>
// //               <ul>
// //                 <li className="half">
// //                   <input placeholder="Name" type="text" name="name" required />
// //                 </li>
// //                 <li className="half">
// //                   <input
// //                     placeholder="Email"
// //                     type="email"
// //                     name="email"
// //                     required
// //                   />
// //                 </li>
// //                 <li>
// //                   <input
// //                     placeholder="Subject"
// //                     type="text"
// //                     name="subject"
// //                     required
// //                   />
// //                 </li>
// //                 <li>
// //                   <textarea
// //                     placeholder="Message"
// //                     name="message"
// //                     required
// //                   ></textarea>
// //                 </li>
// //                 <li>
// //                   <input type="submit" className="flat_button" value="SEND" />
// //                 </li>
// //               </ul>
// //             </form>
// //           </div>
// //         </div>

// //         {/* MAP INFO SECTION */}

// //         <div className="info_map">
// //           Aravind ,
// //           <br />
// //           Tenali
// //           <br />
// //           India, Andhra Pradesh
          
// //           <br />
// //           <span>aravindchowta13@gmail.com</span>
// //         </div>

// //         {/* MAP SECTION */}

// //         <div className="map_wrap">
// //           <MapContainer center={[16.5062, 80.648]} zoom={13}>
// //             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// //             <Marker position={[16.442220, 80.622500]}>
// //               <Popup>Aravind lives here, let's meet!!! :)</Popup>
// //             </Marker>
// //           </MapContainer>
// //         </div>
// //       </div>{" "}
// //       */ /* <Loader type="pacman" />
// //     </>
// //   );
// // };

// // export default Contact;




import React from "react";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Importing updated images
import whatsapp from "../../assets/images/whatsapp.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import telegram from "../../assets/images/telegram.png";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container contact_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Want to connect? My inbox is always open! You can also reach me on
            social media.
          </p>

          {/* Social Media Icons Section */}
          <div className="social_media_icons">
            <a
              href="https://wa.me/7013092476"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>

            <a
              href="https://www.instagram.com/aravind__chowta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>

            <a
              href="https://www.linkedin.com/in/chowta-aravind-920065271/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://t.me/AravindChowta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>

        {/* MAP INFO SECTION */}

        <div className="info_map">
          Aravind,
          <br />
          Tenali
          <br />
          India, Andhra Pradesh
          <br />
          <span>aravindchowta13@gmail.com</span>
        </div>

        {/* MAP SECTION */}

        <div className="map_wrap">
          <MapContainer center={[16.233143, 80.659922]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[16.233143, 80.659922]}>
              <Popup>Aravind lives here, let's meet!!! :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
