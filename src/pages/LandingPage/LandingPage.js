import "./LandingPage.scss";
import { Link } from "react-router-dom";
import matrix from "../../assets/matrix.jpg";

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
          <Link className="landing-page__button">Get Started</Link>
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
      <img
        src={matrix}
        alt="Photo of zeros and ones"
        className="landing-page__info-img"
      />
    </>
  );
}

export default LandingPage;
