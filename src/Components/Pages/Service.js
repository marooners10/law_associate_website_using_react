import React from "react";
import Navbar from "../Navbar";
import Call from "../Call";
import Email from "../Email";
import Hero from "../Hero";
import aboutus from "../Images/aboutus.jpg";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import ImageContainer from "../ImageContainer";

const Service = () => {
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
      <ImageContainer />
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Service;
