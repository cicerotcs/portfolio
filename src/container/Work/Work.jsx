import React, { useState, useEffect } from "react";

import "./Work.scss";

import { motion } from "framer-motion";

import { NavigationDots } from "../../components";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { client, urlFor } from "../../client";

const Work = () => {
  const [active, setActive] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    try {
      client.fetch(query).then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const projectsFilter = (item) => {
    setActive(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <section id="work">
      <div className="work flex-center padding-main">
        <NavigationDots active="work" />
        <h2 className="head-text">Some Things I’ve Built</h2>
        <p
          className="p-text"
          style={{ textAlign: "center", marginTop: 20, fontSize: 19.2 }}
        >
          Here are a few past projects I've worked on. Still Updating...
        </p>
        <div className="work__platforms flex-center">
          {["UI/UX", "Web3", "React JS", "All"].map((item) => (
            <div
              onClick={() => projectsFilter(item)}
              key={item}
              className={active === item ? "item-active" : ""}
            >
              {item}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="work__projects flex-center"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              key={index}
              className="work__projects-project"
            >
              <div className="work__projects-img">
                <img src={urlFor(project.imgUrl)} alt={project.title} />
                <div className="img-hover">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="eye">
                      <AiFillEye />
                    </div>{" "}
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <div className="github">
                      <AiFillGithub />
                    </div>
                  </a>
                </div>
              </div>

              <p className="work__projects-tag p-text">{project.tags[0]}</p>
              <p className="p-text">{project.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
