import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileword
} from "react-social-media-icons";
export default function Footer() {
  return (
    <FooterContainer className="main-footer">
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="text-xs-center">
          Copyright &copy; Marko Gacic {new Date().getFullYear()}. All Rights
          Reserved
        </p>
      </div>
      <div className="social-container d-flex justify-content-around">
        <a href="https://github.com/marko-gacic" className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/marko-gacic-359429195/"
          className="icon "
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: gray;
  color: white;
  text-align: center;
  .icon {
    font-size: 2rem;
    color: yellow;
    transition: 1.5s ease-in-out;
    position: center;
    text-align: center;
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .icon:hover {
    color: black;
  }
`;
