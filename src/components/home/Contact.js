import React from "react";
import Hero from "../globals/Hero";
import aboutImg from "../../images/aboutBcg.jpg";
import Contact from "../ContactPage/ContactPage";
export default function ContactPage() {
  return (
    <>
      <Hero img={aboutImg}>
        <Contact />
      </Hero>
    </>
  );
}
