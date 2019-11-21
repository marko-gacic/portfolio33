import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { setRem, setFont, setLetterSpacing } from "../../styles";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://github.com/marko-gacic" className="github">
        <FontAwesomeIcon icon={faGithub} size="3x" color="yellow" />
      </a>

      <a
        href="https://www.linkedin.com/in/marko-gacic-359429195/"
        className="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" color="yellow" />
      </a>
    </div>
  );
}
