import "./footerstyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom">
        <div className="bottom-1">
          <h4>KARKI LAW ASSOCIATES</h4>
          <p> LAW FIRM REG. NO : 289462</p>
          <p> - New Baneshwor near Everest Hotel</p>
          <p> - Madan Bhandari Road, Kathmandu, Nepal.</p>
          <p> - +977 01-4794184, 9841818297</p>
          <p> - info@karkilaw.com.np</p>
        </div>
        <div className="bottom-2">
          <h4>THE FIRM</h4>
          <a href="/our-firm">Our Firm</a>
          <a href="/our-team">Our Team</a>
          <a href="/news-and-publication">News & Publications</a>
          <a href="/join-us">Join Us</a>
        </div>
        <div className="bottom-3">
          <h4>PRACTICE AREAS</h4>
          <a href="/banking">Banking & Finance</a>
          <a href="/corporate">Corporate & Commercial</a>
          <a href="/litigation">Litigation & Arbitration</a>
          <a href="/mergers">Mergers & Acquisitions</a>
        </div>
      </div>
      <div className="top">
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100083401236075&mibextid=ZbWKwL"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
