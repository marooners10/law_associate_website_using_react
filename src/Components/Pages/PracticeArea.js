import React from "react";
import Navbar from "../Navbar";
import Call from "../Call";
import Email from "../Email";
import area from "../Images/area.jpg";
import Hero from "../Hero";
import OurWork from "../OurWork";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import ImageContainer from "../ImageContainer";

const PracticeArea = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={area}
        title="OUR PRACTICE AREAS"
        text="We are specialists in business law and dispute resolution."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <Call />
      <Email />
      <OurWork />
      <ImageContainer />
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default PracticeArea;
