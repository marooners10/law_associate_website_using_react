import React from "react";
import Navbar from "../Navbar";
import Call from "../Call";
import Email from "../Email";
import aboutus from "../Images/aboutus.jpg";
import AboutSlider from "../AboutSlider/AboutSlider";
import Hero from "../Hero";
import "./about.css";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import OurWork from "../OurWork";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={aboutus}
        title="NEPAL'S LEADING LAW FIRM"
        text="We deliver the highest international standards with an extensive local expertise."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <Call />
      <Email />
      <OurWork />
      <AboutSlider />
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default About;
