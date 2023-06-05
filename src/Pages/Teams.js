import team from "../Photos/team.webp";
import calender from "../Photos/calender.webp";
import workforce from "../Photos/workforce.webp";
import discovery from "../Photos/discovery-img.webp";
import invitee from "../Photos/invitee-photo.webp";
import macbook from "../Photos/macbook.png";

export default function Teams() {
  return (
    <div className="row" id="marginTop-react">
      <div className="col-md-6">
        {/* <h4 style={{ marginleft: "100px" }}>Calendy for teams</h4> */}
        <h1 className="header-left teams text-size">
          Smarter scheduling
          <span className="next-line teams text-size">for teams</span>
        </h1>

        <p className="about-carlendy">
          Whether your team’s performance is measured by sales revenue,
          recruiting pipeline, or customer retention, scheduling automation
          enables your team to hit goals faster.
        </p>

        <div style={{ margin: "30px 30px 30px 100px" }}>
          <button type="button" className="btn btn-primary btn-lg">
            Start for free
          </button>
          <button type="button" className="btn btn-lg btn-outline-primary">
            Contact Sales
          </button>
        </div>

        <p className="about-carlendy last-parag">
          Create your free account. No credit card required.
        </p>
      </div>
      <div className="col-md-6">
        <img src={team} alt="woman" className="image-of-woman" />
      </div>

      <div className="row" style={{ marginTop: "150px" }}>
        <div className="col-md-6">
          <h4 style={{ marginLeft: "100px" }}>SPEED OF CONNECTION</h4>
          <h1 className="header-left teams text-size">
            Outperform the
            <span className="next-line teams text-size">
              competition with faster connections
            </span>
          </h1>

          <p className="about-carlendy">
            You can’t waste time when prospects, clients, and candidates express
            interest. Avoid missed opportunities by automatically qualifying and
            routing website visitors to specific team members. You can also pool
            scheduling availability together to offer more options to connect.
          </p>
        </div>
        <div className="col-md-6">
          <img src={calender} alt="woman" className="image-of-woman" />
        </div>

        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-6">
            <img
              src={workforce}
              alt="workforce"
              className="image-of-woman"
              style={{ paddingLeft: "600px" }}
            />
          </div>

          <div className="col-md-6">
            <h4 style={{ marginLeft: "100px" }}>TIME MANAGEMENT</h4>
            <h1 className="header-left teams text-size">
              Automate scheduling,
              <span className="next-line teams text-size">
                improve team performance
              </span>
            </h1>

            <p className="about-carlendy">
              Scheduling automation eliminates time-consuming admin tasks so
              your team can focus on higher priorities. With actionable insights
              into your team’s scheduling activities and integrations with your
              team’s favorite tools, you can identify potential process
              improvements and empower your team to work more efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "150px" }}>
        <div className="col-md-6">
          <h4 style={{ marginLeft: "100px" }}>TEAM STANDARDIZATION</h4>
          <h1 className="header-left teams text-size">
            Improve the customer
            <span className="next-line teams text-size">
              experience with consistent scheduling
            </span>
          </h1>

          <p className="about-carlendy">
            Managed Events let you assign and lock Event Type details — such as
            meeting descriptions, invitee questions, and notifications — so your
            team delivers a reliable and professional experience every time.
            Calendly Image - Automation Streamline
          </p>
        </div>
        <div className="col-md-6">
          <img src={discovery} alt="discovery-img" width="80%" />
        </div>

        <div class="row margin-for-teams" style={{ marginTop: "150px" }}>
          <div class="col-md-6">
            <img
              src={invitee}
              alt="invitee-photo"
              class="image-of-woman"
              style={{ paddingLeft: "600px" }}
            />
          </div>

          <div class="col-md-6">
            <h4 style={{ marginLeft: "100px" }}>CONSISTENCY IN EXECUTION</h4>
            <h1 class="header-left teams text-size">
              Streamline
              <span class="next-line teams text-size">
                communications across the meeting lifecycle
              </span>
            </h1>

            <p class="about-carlendy">
              From pre-call email questionnaires and confirmation texts to
              post-call follow-up links, meeting best practices can be
              automatically applied across your team. These templates and
              workflows increase engagement and ensure consistent, professional
              communications with your customers and candidates.
            </p>
          </div>
        </div>
        <div class="card bg-dark text-white">
          <img
            src={macbook}
            class="card-img background-img"
            alt="macbook-background"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-on-image">
              Find just-right plans for
              <span class="next-line"> and small teams</span>
            </h3>

            <button type="button" class="btn btn-primary btn-lg individual-btn">
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
    </div>
  );
}
