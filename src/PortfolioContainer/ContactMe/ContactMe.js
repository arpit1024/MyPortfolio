import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const hadleOrg = (e) => {
    setOrg(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("NAME", name);
    if (!name.length || !email.length || !org.length || !message.length) {
      setBanner("Please Fill All The Fields");
      toast.error("Please Fill All The Fields");
      setBool(false);
    } else {
      console.log("MESSAGE SENT");
      console.log(name, org, message, email);
      emailjs
        .sendForm(
          "service_k0m5f0i",
          "template_8nyadqe",
          e.target,
          "user_CXpNrZCPiYQuQglQ0TcPd"
        )
        .then((res) => console.log(res));
      alert("Thank you for contacting me !");
      setName("");
      setOrg("");
      setMessage("");
      setEmail("");
    }
    // try {
    //   let data = {
    //     name,
    //     email,
    //     message,
    //   };
    //   setBool(true);
    //   const res = await axios.post(`/contact`, data);
    //   if (name.length === 0 || email.length === 0 || message.length === 0) {
    //     setBanner(res.data.msg);
    //     toast.error(res.data.msg);
    //     setBool(false);
    //   } else if (res.status === 200) {
    //     setBanner(res.data.msg);
    //     toast.success(res.data.msg);
    //     setBool(false);

    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a
            href="https://www.linkedin.com/in/arpit-shrivastava-0a5227218/"
            target="_blank"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=arpitshrivastava764@gmail.com&tf=1"
            target="_blank"
          >
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://github.com/arpit1024" target="_blank">
            <i className="fa fa-github" />
          </a>
          <a href="tel:7389821887" target="_blank">
            <i className="fa fa-phone"></i>
          </a>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
            <div className="mobile_no">Contact No:- +91 7389821887</div>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} name="name" value={name} />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleEmail}
              name="email"
              value={email}
            />

            <label htmlFor="org">Organization</label>
            <input type="org" onChange={hadleOrg} name="org" value={org} />

            <label htmlFor="message">Message</label>
            <textarea
              type="message"
              onChange={handleMessage}
              name="message"
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
