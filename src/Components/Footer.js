import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-content">
      <h1>Abhigyan Kashyap</h1>
      <span>
        {" "}
        <h3>
          {" "}
          Email ID:{" "}
          <a href="mailto:abhigyankashyap04@gmail.com">
            abhigyankashyap04@gmail.com
          </a>{" "}
        </h3>
        <h3>
          Contact Number: <a href="tel:+918486545237">+91 8486545237</a>
        </h3>
      </span>

      <div className="social_media">
        <a
          href="https://github.com/The-CuriousOne"
          className="social_icons"
          id="github_icon"
        >
          <img src={process.env.PUBLIC_URL + "/github2.png"} alt="GitHub Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhigyan-kashyap-314014178/"
          className="social_icons"
          id="linkedin_icon"
        >
          <img
            src={process.env.PUBLIC_URL + "/linkedin2.png"}
            alt="LinkedIn Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
