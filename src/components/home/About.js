import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/profile.jpg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
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
            "Hello. My name is Marko, and I'm self-taught programmer (well i'm
            trying to be). At the moment im learning React.js. I love
            technology, and i love to learn everyday new stuffs. I love movies
            and games (big fun of marvel, and mmorpg). At the end i'm seeking
            for entry level in IT sector as Front-end Developer. Thanks for
            reading this. Best regards Marko. "
          </p>
          <SecondaryBtn>Curriculum vitae</SecondaryBtn>
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
  max-width: 2080px;
  display:grid;
  grid-template-columns: 1fr  1fr 1fr   ;
  grid-column-gap: ${setRem(50)};
  .about-img,.about-info {
  position:center;
  }
  .about.info {
    p{
      width:30%;
    }
  }
  `}
`;

export default About;
