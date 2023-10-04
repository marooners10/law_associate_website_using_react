import React from "react";
import Navbar from "../Navbar";
import Call from "../Call";
import Email from "../Email";
import Slider from "../Slider/Slider";
import Cover from "../Cover";
import Cover1 from "../Cover1";
import "./home.css";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import TextSLider from "../TextSlider";
import ImageContainer from "../ImageContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Call />
      <Email />
      <Slider />
      <Cover />
      <Cover1 />
      <ImageContainer />
      <TextSLider />
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Home;
