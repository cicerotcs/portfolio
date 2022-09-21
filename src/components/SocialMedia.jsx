import React from "react";

import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="social">
      <div>
        <GoMarkGithub
          onClick={() => window.open("http://github.com/cicerotcs")}
        />
      </div>
      <div>
        <AiFillLinkedin
          onClick={() => window.open("http://linkedin.com/in/cicerotcs")}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
