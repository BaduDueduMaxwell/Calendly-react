import "bootstrap/dist/css/bootstrap.min.css";

// Importation of picture
import SecondPhoto from "../Photos/second.webp";
import ebay from "../Photos/ebay.png";
import dropbox from "../Photos/dropbox.webp";
import compass from "../Photos/compass.jpeg";
import zenefits from "../Photos/zenefits.png";
import twilio from "../Photos/twilio.jpeg";

export default function Home() {
  return (
    <div className="Home">
      <div className="row" id="marginTop-react">
        <div className="col-md-6">
          <h1 className="header-left">
            Easy <span className="next-line">scheduling </span>
            <span className="next-line navy">ahead</span>
          </h1>

          <p className="about-carlendy">
            Calendly is your scheduling automation platform for eliminating the
            back-and-forth emails for finding the perfect time — and so much
            more.
          </p>

          <input
            type="email"
            id="email"
            pattern=".+@globex\.com"
            size="57"
            placeholder="Enter your Email"
            style={{ marginRight: "10px" }}
            required
          />

          <button type="button" className="btn btn-primary btn-lg">
            Submit
          </button>

          <p className="about-carlendy last-parag">
            Create your free account. No credit card required.
          </p>
        </div>
        <div className="col-md-6">
          <img src={SecondPhoto} alt="woman" className="image-of-woman" />
        </div>
      </div>

      <div className="row">
        <div style={{ marginTop: "250px" }} className="col-md-12">
          <h2 id="second-layout">
            Simplified scheduling for more than
            <span className="navy">10,000,000</span> users
            <span className="next-line">worldwide</span>
          </h2>
        </div>

        <div className="flex-container">
          <div>
            <img className="images-logo" src={ebay} alt="ebay" width="300px" />
          </div>
          <div>
            <img
              className="images-logo"
              src={dropbox}
              alt="dropbox"
              width="300px"
            />
          </div>
          <div>
            <img
              className="images-logo"
              src={compass}
              alt="compass"
              width="300px"
            />
          </div>
          <div>
            <img
              className="images-logo"
              src={zenefits}
              alt="zenefits"
              width="300px"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="circleBase circle1 element-1">1</div>
            <h1 className="h1-circle1 element-2">Create simple rules</h1>
            <p id="parag-element">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              nulla non praesentium ad perferendis, soluta recusandae assumenda
              vitae aperiam alias id sequi natus ab exercitationem harum ipsum
              aliquam animi quia?
            </p>
          </div>

          <div className="col-md-4">
            <div className="circleBase circle1 element-1">2</div>
            <h1 className="h1-circle1 element-2">Create simple rules</h1>
            <p id="parag-element">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              nulla non praesentium ad perferendis, soluta recusandae assumenda
              vitae aperiam alias id sequi natus ab exercitationem harum ipsum
              aliquam animi quia?
            </p>
          </div>

          <div className="col-md-4">
            <div className="circleBase circle1 element-1">3</div>
            <h1 className="h1-circle1 element-2">Create simple rules</h1>
            <p id="parag-element">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              nulla non praesentium ad perferendis, soluta recusandae assumenda
              vitae aperiam alias id sequi natus ab exercitationem harum ipsum
              aliquam animi quia?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
