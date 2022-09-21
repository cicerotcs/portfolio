import React from "react";

import "./Footer.scss";

import { NavigationDots } from "../../components";

import { useForm } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("mzbwelaj");

  return (
    <footer id="contact">
      <div className="footer flex-center padding-main">
        <NavigationDots active="contact" />
        <h2 className="head-text">Send me a message!</h2>
        <p className="p-text">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        {!state.succeeded ? (
          <form onSubmit={handleSubmit} className="contact flex-center">
            <input
              className="p-text"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="p-text"
              id="email"
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="3"
              required
            />
            <button className="contact-button" type="submit">
              {state.submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        ) : (
          <div className="contact__thanks">
            <h3>Thanks! Your message has been successfully sent.</h3>
          </div>
        )}
      </div>
      <p style={{ textAlign: "center", fontSize: 13 }}>
        © Cicero Teixeira 2022
      </p>
    </footer>
  );
};

export default Footer;
