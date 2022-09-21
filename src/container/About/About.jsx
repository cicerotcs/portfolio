import React, { useState, useEffect } from "react";

import "./About.scss";

import { motion } from "framer-motion";

import { client, urlFor } from "../../client";

import { NavigationDots } from "../../components";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <section id="about">
      <div className="about flex-center padding-main">
        <NavigationDots active="about" />
        <h2 className="head-text">I build things for the web</h2>
        <p
          className="p-text"
          style={{ textAlign: "center", marginTop: 20, fontSize: 19.2 }}
        >
          I code solid and scalable front-end projects with great user
          experiences.
        </p>
        <div className="about__skills flex-center">
          {about.map((about) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              key={about.title}
              className="about__skill"
            >
              <img src={urlFor(about.imgurl)} alt={about.title} />
              <h3 className="bold-text">{about.title}</h3>
              <p className="p-text">{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
