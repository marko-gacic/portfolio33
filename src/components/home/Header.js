import React from "react";
import Hero from "../globals/Hero";
import aboutImg from "../../images/aboutBcg.jpg";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
import Icons from "../globals/Icons";

export const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="my portfolio"
        text="Front-end Developer Marko Gacic"
      >
        <Icons t="1rem" />
      </Banner>
    </Hero>
  );
};

export default Header;
