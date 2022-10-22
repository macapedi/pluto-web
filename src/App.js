import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import DocumentationPage from "./pages/DocumentationPage/DocumentationPage.js";
import DashboardPage from "./pages/DashboardPage/DashboardPage.js";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Header />
        </nav>
        <Switch>
          <Route path="/" to="/landing" exact component={LandingPage} />
          <Route
            path="/dashboard"
            exact
            render={(routerProps) => {
              return <DashboardPage routerProps={routerProps} />;
            }}
          />
          <Route path="/landing" exact component={LandingPage} />
          <Route path="/documentation" exact component={DocumentationPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
