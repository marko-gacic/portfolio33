import styled from "styled-components";

import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
  setFont
} from "../../styles";
// Forms, inputs, buttons

export const Form = styled.form`
  width: 300px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)}};
  position: relative;
  ${setLetterSpacing(3)}
  color: gold;
  ${media.tablet`width: 70vw;
    border: 6px solid goldenrod;

    p {
      width: 75%;
    }`}
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;

  border: ${setBorder(3)};
  background-color: #fff;
  position: relative;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 10px;
`;

// Text

export const Title = styled.h1`
  text-align: center;
  font-family: ${setFont.slanted};
  font-weight: 600;
  position: relative;
  color: gold;
  font-size: 2.2em;
  background: black;
  border: 3px solid goldenrod;
`;

export const Title2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#4d4d4d"};
`;
export const Label = styled.label`
  justify-content: center;

  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin-bottom: 1em;
`;
export const textarea = styled.textarea`
  width: 300px;
  height: 35px;
  border: ${setBorder(3)};
  background-color: #fff;
`;
