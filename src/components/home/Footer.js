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
      <div className="social-container">
        <a href="https://github.com/marko-gacic" className="github">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/marko-gacic-359429195/"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: black;
  color: white;
  text-align: center;
  position: center;
  
  .github {
    font-size: 2rem;
    color: yellow;
    transition: 1s ease-in-out;
    margin: 2rem;

  }
  .github:hover {
    color: whitesmoke;
  }
    .linkedin {
    font-size: 2rem;
    color: yellow;
    transition: 1s ease-in-out;
    margin:2rem;


  }
  .linkedin:hover {
    color: #0077B5;
    
`;
