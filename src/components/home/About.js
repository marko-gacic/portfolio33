import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/profile.jpg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
  setFont
} from "../../styles";
import { PrimaryBtn, SecondaryBtn } from "../globals/Buttons";
import styled from "styled-components";

export const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about me" />
        </div>
        <div className="about-info">
          <Title title="short about me" />
          <p>
            "Hello. My name is Marko, and I'm self-taught programmer (well I'm
            trying to be). At the moment Im learning React.js. I love
            technology, and I love to learn everyday new stuff. I love movies
            and games (big fan of marvel, and mmorpg). At the end I'm seeking
            for entry level in IT sector as Front-end Developer. Thanks for
            reading this. Best regards Marko. "
          </p>
          <SecondaryBtn
            as="a"
            href="https://drive.google.com/file/d/18lY_0LDElzvTTPkx4_Qc0dxHeGCpkYdp/view?usp=sharing"
          >
            Curriculum vitae
          </SecondaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }

  .about-img {
    img {
      width: 50%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
      font-size: 25px;
    }
  }
  width: 100%;
  position: center;
  ${media.large`
    .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  width:100%;
  max-width: 1170px;
  display:grid;
  grid-template-columns: 1fr  1fr 0   ;
  grid-column-gap: ${setRem(30)};
  .about-img,.about-info {
  position:center;
  }
  .about.info {
    p{
      width:30%;
      font-family:
    }
  }
  `}
`;

export default About;
