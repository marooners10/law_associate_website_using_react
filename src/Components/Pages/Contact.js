import React from "react";
import Navbar from "../Navbar";
import "../Pages/contact.css";
import Call from "../Call";
import Email from "../Email";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import Hero from "../Hero";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1634143407677-e19f75512b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80"
        title="NEPAL'S LEADING LAW FIRM"
        text="We deliver the highest international standards with an extensive local expertise."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <Call />
      <Email />
      <div className="contact-karki">
        <h1>CONTACT US</h1>
        <div className="contact-karki1">
          <div>
            <i className="fa-solid fa-map-location-dot"></i>
            <h5>OFFICE</h5>
            <p>
              New Baneshwor near Everest Hotel
              <br />
              Kathmandu, Nepal.
            </p>
          </div>
          <div>
            <i className="fa-solid fa-mobile"></i>
            <h5>PHONE</h5>
            <p>+977 01-4794184, 9841818297</p>
          </div>
          <div>
            <i className="fa-solid fa-envelope-open-text"></i>
            <h5>EMAIL</h5>
            <p>info@karkilaw.com.np</p>
          </div>
        </div>
      </div>
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Contact;
