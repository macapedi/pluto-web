import "./LandingPage.scss";
import { Link } from "react-router-dom";
import matrix from "../../assets/matrix.jpg";
import Footer from "../../components/Footer/Footer.js";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div className="hero-container">
          <h1 className="landing-page__title">Code the web easily!</h1>
          <p className="landing-page__hero-content">
            Start coding right now in HTML and CSS with our beginner friendly
            tools.
          </p>
          <Link className="landing-page__button" to="/dashboard">
            Get Started
          </Link>
        </div>
      </div>
      <div className="landing-page__info">
        <div className="landing-page__title-info-container">
          <h1 className="landing-page__info-title">Why PlutoWeb?</h1>
        </div>
        <div className="landing-page__info-container">
          <div className="landing-page__info-content">
            <p>
              <span className="dark">1. PlutoWeb</span> simplifies coding for
              beginners
            </p>
            <p>
              <span className="dark">2. PlutoWeb</span> is open-source
            </p>
            <p>
              <span className="dark">3. PlutoWeb</span> is made by students for
              students
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={matrix}
          alt="Photo of zeros and ones"
          className="landing-page__info-img"
        />
      </div>
      <div className="landing-page__work-container">
        <div className="landing-page__title-work">
          <h1 className="landing-page__work-title">How does this work?</h1>
        </div>
        <div className="landing-page__paragraph">
          <p>
            Pluto Web is a web-based application that simplifies code-writing by
            generating a code from a simple process. The process involves
            guiding the user through: (1) inputting a value, (2) selecting a
            component, and (3) creating the component. First, the user will
            input possible values they want in the input field; this may be a
            text, a link, or an image. Second, the user will choose from the
            selection of components we included in the application. Finally,
            when the user press the create button, the application will generate
            the preview of the code and the actual code that the user can copy
            and use for their needs.
          </p>
        </div>
        <Link className="documentation__button" to="/documentation">
          Go to Documentation
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
