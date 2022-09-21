import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="navbar wrapper margin-auto">
          <div className="navbar__logo col-30">
            <span>ct</span>
          </div>

          <ul className="navbar__links col-70">
            {["home", "about", "work", "skills", "testimonials", "contact"].map(
              (item) => (
                <li key={`link-${item}`}>
                  <div />
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            )}
          </ul>
          <div className="navbar__menu">
            <span className="navbar__menu-open">
              <HiMenuAlt4 onClick={() => setToggle(true)} />
            </span>

            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                <span className="navbar__menu-close">
                  <HiX onClick={() => setToggle(false)} />
                </span>

                <ul>
                  {["home", "about", "work", "skills", "contact"].map(
                    (item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
