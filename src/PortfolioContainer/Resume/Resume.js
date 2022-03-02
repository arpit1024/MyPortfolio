import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <span className="projectBtns">
          <span>
            {props.pUrl ? (
              <a href={props.pUrl} target="_blank">
                <button className="projBtn1">Demo</button>
              </a>
            ) : null}
          </span>
          <span>
            {props.gUrl ? (
              <a href={props.gUrl} target="_blank">
                <button className="projBtn2">Code</button>
              </a>
            ) : null}
          </span>
        </span>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 65 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 65 },
  ];

  const projectsDetails = [
    {
      title: "Clone of Meesho",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "An Ecommerce website for selling fashion and lifestyle products.",
      subHeading:
        "Technologies Used: React Js, Mongo DB, Express Js, Node JS, Bootstrap.",
      pUrl: "https://aadityaneve.github.io/Clone-Pluralsight/pages/index.html",
      gUrl: "https://github.com/aadityaneve/Clone-Pluralsight/tree/vaibhav",
    },
    {
      title: "Clone Of HealthKart",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "A Todo website developed using React, Redux",
      subHeading:
        " HealthKart- A great place for people serious about health and fitness.",
      pUrl: "https://vk-todo.herokuapp.com/",
      gUrl: "github",
    },
    {
      title: "Clone of JioMart",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "E-commerce market place for online groceries, home essentials.",
      subHeading: "Technologies Used:  Html, Css, JavaScript.",
      pUrl: "https://vaibhavkothiyal.github.io/jiomartClone.github.io/html/Index.html",
      gUrl: "https://github.com/vaibhavkothiyal/jiomartClone.github.io",
    },
  ];

  const resumeDetails = [
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Education*/

    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Masai School, Bangalore"}
        subHeading={"Full Stack Web Development"}
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"BE (MECHANICAL)"}
        subHeading={"LNCTS COLLEGE BHOPAL"}
        fromDate={"2015"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"12th"}
        subHeading={"Saket School Vidisha"}
        fromDate={"2014"}
        toDate={"2012"}
      />
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          pUrl={projectsDetails.pUrl}
          gUrl={projectsDetails.gUrl}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Riding Bikes"
        description="Apart from being a tech enthusiast , i also love riding bikes and love to explore new places"
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Exploring Nature"
        description="My love for nature was since childhood i love mountains and rivers a lot it gives me peace by being around nature."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
