import React from "react";
import Navbar from "../Navbar";
import Call from "../Call";
import Email from "../Email";
import aboutus from "../Images/aboutus.jpg";
import AboutSlider from "../AboutSlider/AboutSlider";
import Hero from "../Hero";
import "./firm.css";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import OurWork from "../OurWork";
import ImageContainer from "../ImageContainer";

const Firm = () => {
  return (
    <div className="firm-containers">
      <Navbar />
      <Call />
      <Email />
      <Hero
        cName="hero-about"
        heroImg={aboutus}
        title="NEPAL'S LEADING LAW FIRM"
        text="We deliver the highest international standards with an extensive local expertise."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <div className="karki-firm0">
        <p>
          Karki Law Associates Advocates is one of Nepal’s leading full-service
          law firms advising domestic and international clients providing a
          broad range of legal, taxation, regulatory and advisory services to
          the commercial, industrial and financial communities. Karki Law
          Associates Advocates serves the need of both small and large
          businesses, ranging from basic start-up work to complex legal issues
          and regulatory matters. Karki Law Associates Advocates currently
          operates through its offices located in New Baneshwor, Kathmandu,
          Nepal.
          <br />
          We are proud of the recognition we have received from our clients for
          our commitment to service, and we value their satisfaction as the best
          measure of our success.
        </p>
      </div>
      <OurWork />
      <AboutSlider />
      <ImageContainer />
      <div className="appointment11">
        <h2>A HIGHLY REGARDED PRACTICE</h2>

        <p>
          We are ranked as one of the top law firms in Nepal by legal
          publications. They have recognized us for "excellent knowledge and
          practice experience of business law in Nepal and Nepali legal
          practicalities", "extensive expertise in handling complex and
          high-value mandates", "business-focused and timely advice” and "highly
          recommended by both international clients and law firms."
        </p>
        <div>
          <a href="/practice-area">LEARN MORE</a>
        </div>
      </div>
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Firm;
