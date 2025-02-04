import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { setRem, setFont, setLetterSpacing } from "../../styles";

export default function SocialFollow() {
  return (
    <FooterContainer>
      <div className="social-container">
        <a href="https://github.com/marko-gacic" className="icon1">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/marko-gacic-359429195/"
          className="icon2"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .icon1 {
    font-size: 3rem;
    color: yellow;
    transition: 1s ease-in-out;
    text-align: center;
    margin-left: 1rem;
    margin-top: 10rem;
  }
  .icon1:hover {
    color: whitesmoke;
  }
  .icon2 {
    font-size: 3rem;
    color: yellow;
    transition: 1s ease-in-out;
    text-align: center;
    margin-left: 1rem;
    margin-top: 10rem;
  }
  .icon2:hover {
    color: #0077b5;
  }
`;
