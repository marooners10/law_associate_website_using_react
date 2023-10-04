import React from "react";
import Navbar from "../Navbar";
import Call from "../Call";
import Email from "../Email";
import joinus from "../Images/joinus.jpg";
import Hero from "../Hero";
import "../Pages/join.css";
import JoinSlider from "../JoinSlider.js/JoinSlider";
import profile1 from "../Images/profile1.jpeg";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";

const JoinUs = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={joinus}
        title="JOIN US"
        text="We highly appreciate and recognize your talent."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <Call />
      <Email />
      <div className="join-container">
        <div className="join-sidebar">
          <div className="practice-area">
            <h2>PRACTICE AREA</h2>
            <hr />
            <ul>
              <li>
                <a href="/banking">Banking & Finance</a>
              </li>
              <li>
                <a href="/corporate">Corporate & Commercial</a>
              </li>
              <li>
                <a href="/litigation">Litigation & Arbitration</a>
              </li>
              <li>
                <a href="/mergers">Mergers & Acquisitions</a>
              </li>
            </ul>
          </div>
          <div className="join-slider">
            <h2>WHAT OTHERS SAY</h2>
            <hr />
            <JoinSlider />
          </div>
          <div className="founder">
            <h2>KEY CONTACTS </h2>
            <hr />
            <div>
              <img
                alt="/"
                src={profile1}
                style={{ width: "100px", height: "100px" }}
              />
              <a href="/">Roshan Karki</a>
              <span>
                <ins>(Senior Partner)</ins>
              </span>
            </div>
            <div>
              <img
                alt="/"
                src="https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=1024x1024&w=is&k=20&c=cljXhuMJ8MaLGJCsfygmojSXy4KeaewvcDZx5Xwq3Xw="
                style={{ width: "100px", height: "100px" }}
              />
              <a href="/">ABC</a>
              <span>
                <ins>(Senior Partner)</ins>
              </span>
            </div>
            <div>
              <img
                alt="/"
                src="https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=1024x1024&w=is&k=20&c=cljXhuMJ8MaLGJCsfygmojSXy4KeaewvcDZx5Xwq3Xw="
                style={{ width: "100px", height: "100px" }}
              />
              <a href="/">XYZ</a>
              <span>
                <ins>(Senior Partner)</ins>
              </span>
            </div>
          </div>
        </div>
        <div className="join-content">
          <h1>Join Our Team</h1>
          <p>
            At Karki Law Associates, we are always looking for talents both for
            entry level and experienced positions. We hire well-rounded and
            highly motivated candidates with excellent academic qualifications
            and fluency in English and Nepali. We offer positions that will
            train new graduates to the highest standards of legal practice. We
            also provide opportunity for final year LL.B. and LL.M. students to
            undertake internship within our team. If you are interested in
            joining our dynamic and highly experienced team of lawyers please
            send us the following:
            <ul>
              <li>
                Covering letter (stating why you are interested in joining our
                firm);
              </li>
              <li>
                Resume (with detailed academic marks in all subjects from SLC
                onwards); and
              </li>
              <li>English essay sample.</li>
            </ul>
          </p>
          <h4>
            You may email your application at{" "}
            <a
              href="mailto:info@karkilaw.com.np"
              style={{ color: "black", transition: "color 0.3s" }} // Inline CSS for the default state
              onMouseOver={(e) => (e.target.style.color = "#354c84")} // Inline CSS for hover state
              onMouseOut={(e) => (e.target.style.color = "black")} // Reset color on mouse out
            >
              info@karkilaw.com.np
            </a>
          </h4>
        </div>
      </div>
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default JoinUs;
