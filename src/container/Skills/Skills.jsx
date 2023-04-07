import React, { useState, useEffect, Fragment } from "react";

import { client, urlFor } from "../../client";
import { motion } from "framer-motion";

import { NavigationDots } from "../../components";

import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const [job, setJob] = useState([]);
  const [company, setCompany] = useState([]);

  const [tag, setTag] = useState("Freelancer");
  const [animatedContent, setAnimatedContent] = useState({ opacity: 1 });
  const [active, setActive] = useState("Freelancer");

  useEffect(() => {
    const companies = '*[_type == "companies"]';
    const jobs = '*[_type == "jobDetails"]';
    const skills = '*[_type == "skills"]';

    try {
      client.fetch(companies).then((data) => {
        setCompany(data);
      });
      client.fetch(jobs).then((data) => {
        setJob(data);
      });
      client.fetch(skills).then((data) => {
        setSkills(data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const showJob = (company) => {
    setActive(company);
    setAnimatedContent([{ opacity: 0 }]);
    setTag(company);

    setTimeout(() => {
      setAnimatedContent([{ opacity: 1 }]);
    }, 200);
  };

  return (
    <section id="skills">
      <div className="skills flex-center padding-main">
        <NavigationDots active="skills" />
        <h2 className="head-text">Skills and Experience</h2>
        <p className="p-text" style={{ textAlign: "center", marginTop: 20 }}>
          🎓 Bachelor in Computer Science
        </p>
        <p className="p-text" style={{ textAlign: "center", margin:"5px" }}>
          🎓 Master's in Software Engineering
        </p>
        <p className="p-text" style={{ textAlign: "center" }}>
          🎓 Software Engineering Immersive (General Assembly)
        </p>
        <div className="experience__skills flex-center">
          {skills.map((skill) => (
            <div key={skill.name}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="experience__companies">
          <div className="experience__companies-tablist">
            {company.map((c) => (
              <button
                onClick={() => showJob(c.name)}
                className={active === c.name ? "item-active" : ""}
              >
                {c.name}
              </button>
            ))}
          </div>
          <motion.div
            animate={animatedContent}
            className="experience__companies-jobs"
          >
            {job.map((j) => (
              <>
                {j.tag === tag && (
                  <>
                    <h3>{j.position}</h3>
                    <p className="p-text">{j.year}</p>
                    <p className="p-text">{j.desc}</p>
                  </>
                )}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
