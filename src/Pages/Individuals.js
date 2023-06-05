import "bootstrap/dist/css/bootstrap.min.css";

// images import

import man from "../Photos/man.webp";
import man2 from "../Photos/man2.webp";
import team from "../Photos/team.webp";
import macbook from "../Photos/macbook.png";

export default function Individuals() {
  return (
    <div className="Individual">
      <div className="row" id="marginTop-react">
        <div className="col-md-6">
          <h1 className="header-left text-size">
            The genius way <span className="next-line" />
            to work <span className="navy">better</span>
          </h1>

          <p className="about-carlendy">
            Calendly is your scheduling automation platform for eliminating the
            back-and-forth emails for finding the perfect time — and so much
            more.
          </p>

          <button type="button" className="btn btn-primary btn-lg signup-btn">
            signup
          </button>

          <p className="about-carlendy last-parag">
            Create your free account. No credit card required.
          </p>
        </div>
        <div className="col-md-6">
          <img src={man} alt="woman" className="image-of-woman" />
        </div>
      </div>

      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-6">
          <img src={man2} alt="woman" className="image-of-woman margin-right" />
        </div>
        <div className="col-md-6">
          <h1 className="header-left text-size">
            The genius way <span className="next-line" />
            to work <span className="navy">better</span>
          </h1>

          <p className="about-carlendy">
            Calendly is your scheduling automation platform for eliminating the
            back-and-forth emails for finding the perfect time — and so much
            more.
          </p>

          <button type="button" className="btn btn-primary btn-lg signup-btn">
            signup
          </button>

          <h3 className="header-1">
            Save time with your own personalized booking links
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <p className="about-carlendy margin-third">A CURATED CALENDAR</p>
          <h3 id="header-1">Book up efficiently</h3>
          <p className="about-carlendy header-1 different">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            a aut labore laudantium explicabo quibusdam voluptas necessitatibus!
            Aliquid quia nam harum dolorum, officia itaque? At quo ad nemo
            consequuntur et?
          </p>
        </div>

        <div className="col-md-6">
          <img src={team} alt="woman" className="image-of-woman margin-third" />
        </div>
      </div>

      <div className="card bg-dark text-white" style={{ marginTop: "50px" }}>
        <img
          src={macbook}
          className="card-img background-img"
          alt="macbook-background"
        />
        <div className="card-img-overlay">
          <h3 className="card-title text-on-image">
            Find just-right plans for
            <span className="next-line"> and small teams</span>
          </h3>

          <button
            type="button"
            className="btn btn-primary btn-lg individual-btn"
          >
            See our plans
          </button>
        </div>
      </div>

      <div className="container-fluid" width="100%">
        <div className="row">
          <div className="col-md-3">
            <h3
              style={{
                marginLeft: "30px",
                paddingTop: "20px",
                fontSize: "3.0rem",
                fontWeight: "bold",
              }}
            >
              Easy <span className="next-line navy">ahead</span>
            </h3>
            <p
              className="about-carlendy footer-text"
              style={{ marginTop: "10px", marginLeft: "30px" }}
            >
              We take the work out of connecting with others so you can
              accomplish more.
            </p>

            <input
              type="email"
              id="email"
              size="40"
              placeholder="English"
              style={{ marginLeft: "30px" }}
              required
            />
          </div>
          <div className="col-md-2" style={{ paddingLeft: "120px" }}>
            <h3 id="heading-h3">About</h3>
            <ul>
              <li>About Calendy</li>
              <li>Contact Us</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="col-md-2" style={{ paddingLeft: "120px" }}>
            <h3 id="heading-h3">Solutions</h3>
            <ul>
              <li>Customer Success</li>
              <li>Sales</li>
              <li>Recruiting</li>
              <li>Information Technology</li>
              <li>Marketing</li>
            </ul>
          </div>

          <div className="col-md-2" style={{ paddingLeft: "120px" }}>
            <h3 id="heading-h3">Popular Features</h3>
            <ul>
              <li>Embed Calendly</li>
              <li>Availability</li>
              <li>Sending Notifications</li>
              <li>Using Calendy Mobile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
