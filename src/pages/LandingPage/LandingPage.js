import "./LandingPage.scss";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-container">
        <h1 className="landing-page__title">Code the web easily!</h1>
        <p className="landing-page__hero-content">Start coding right now in HTML and CSS with our beginner friendly tools.</p>
        <Link className="landing-page__button">Get Started</Link>
      </div>
    </div>
  );
}

export default LandingPage;
