import styled from "styled-components";

import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: gold;
  color: black;
  text-transform: capitalize;
  font-size: ${setRem(30)};
  ${setFont.main};
  padding: ${setRem(10)} ${setRem(20)}};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(2)};
  ${setTransition()};
  margin-top: 2em;

  &:hover {
    background: transparent;
    color: yellow;
  }
  ${props =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}}`};
  text-decoration: none;
  cursor: pointer;
`;

export const SecondaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: black;
  text-transform: capitalize;
  font-size: ${setRem(30)};
  ${setFont.main};
  padding: ${setRem(10)} ${setRem(20)};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(2)};
  ${setTransition()};

  &:hover {
    background: ${setColor.lightGrey};
    color: black;
  }
  ${props =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`}
  text-decoration: none;
  cursor: pointer;
`;

export const SmallBtn = styled(SecondaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
  justify-content: "space-between";
  margin-top: 1rem;
  margin-right: 3rem;
`;
