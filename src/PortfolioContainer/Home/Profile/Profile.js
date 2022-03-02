import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/vaibhavkothiyal/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=vaibhavkkothiyal@gmail.com&tf=1"
                target="_blank"
              >
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://github.com/vaibhavkothiyal" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="#" target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Arpit</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full Stack Web Developer 💻",
                    1000,
                    "MERN Stack Dev 📱",
                    1000,
                    "React/Redux Dev 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Aspiring Full-Stack Web Developer with a specialization in MERN
              stack
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Contact{" "}
            </button>
            <a
              href="https://drive.google.com/file/d/1mRKUnI-MFTDsBftf6jKFl78Eahf_2d3G/view?usp=sharing"
              target="_blank"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
