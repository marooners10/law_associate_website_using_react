import React from "react";
import Hero from "../Hero";
import Call from "../Call";
import Email from "../Email";
import Navbar from "../Navbar";
import team from "../Images/team.jpg";
import Profile from "../Profile/Profile";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";

const Team = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={team}
        title="OUR LAWYERS"
        text="Our highly qualified and experienced team of lawyers in Nepal deliver innovative solutions to clients."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <Call />
      <Email />
      <Profile />
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Team;
