import React from "react";
import styled, { css, keyframes } from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  setFont
} from "../../styles";

const fadeIn = (start, point, end) => {
  const animation = keyframes`
0%{
  opacity:0;
  transform: translateY(${start})
}
50%{
  opacity:0.5;
  transform: translateY(${point})
}
100%{
  opacity:1;
  transform: translateY(${end})
}
`;

  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};

export const Banner = ({ className, title, text, children, greeting }) => {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>{" "}
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)}};

  ${setLetterSpacing(3)}
  color: gold;

  h1 {
    text-transform: capitalize;
    font-size: ${setRem(50)};
    color: yellow;

    span {
      color: white;
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
    font-size: ${setRem(25)};
    margin-bottom: 1rem;
  }
  ${media.tablet`width: 70vw;
    border: 6px solid goldenrod;

    p {
      width: 75%;
    }`}

  h1 {
    ${fadeIn("100%", "-60", "0")}
  }

  .info {
    ${fadeIn("-100%", "60", "0")}
  }
`;
export default BannerWrapper;
