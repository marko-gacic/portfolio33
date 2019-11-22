import React from "react";
import { Link } from "react-router-dom";
import { SmallBtn, SecondaryBtn } from "../globals/Buttons";
import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  setBorder
} from "../../styles";
import PropTypes from "prop-types";

export const Project = ({ className, project }) => {
  const {
    img = "",
    title = "",
    info = "",
    code = "",
    demo_url,
    github_url
  } = project;
  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt="single project" />
        <div className="code">{code}</div>
      </div>
      <div className="project-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn as="a" href={demo_url}>
          demo
        </SmallBtn>

        <SmallBtn as="a" href={github_url}>
          code
        </SmallBtn>
      </div>
    </article>
  );
};

export default styled(Project)`
  background: ${setColor.mainWhite};
  margin: ${setRem(50)} 0;
  padding-right: ${setRem(10)};
  
  .img-container {
    background: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }
    &:hover img {
      opacity: 0.5;
    }
    .code {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)}
      font-size:${setRem(22)};
      padding:${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })}
      opacity: 0;
      ${setTransition()};
    }
    &:hover .code {
      opacity: 0;
    }
  }

  .project-info{
    padding: ${setRem()};
    h4{
      text-transform:capitalize;
      ${setLetterSpacing()};
      font-size:${setRem(30)}

    }
    p{
      ${setLetterSpacing()};
      font-size:${setRem(15)}
    }
    }
        ${setShadow.light}
    ${setTransition()};
    &:hover {
      ${setShadow.darkest}
  }
`;

Project.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
};
