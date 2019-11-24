import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileword
} from "react-social-media-icons";

export const socialData = [
  {
    id: 1,
    icon: <FaGithub className="icon" />,
    url: "https://github.com/marko-gacic"
  },
  {
    id: 2,
    icon: <FaLinkedin className="icon" />,
    url: "https://www.linkedin.com/in/marko-gacic-359429195/"
  },
  {
    id: 3,
    icon: <FaEnvelope className="icon" />,
    url: "poslovnogacic@gmail.com"
  },
  {
    id: 4,
    icon: <FaFileword className="icon" />,
    url:
      "https://drive.google.com/file/d/18lY_0LDElzvTTPkx4_Qc0dxHeGCpkYdp/view"
  }
];
