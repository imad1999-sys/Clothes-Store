
import SplashScreen from "./Pages/SplashScreen/index.jsx";
import LoginPage from "./Pages/LoginPage/index.jsx";
import SignupPage from "./Pages/SignupPage/index.jsx";
import MainPage from "./Pages/MainPage/index.jsx";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const app = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={MainPage} />
      </Router>
    </div>
  );
}
export default app;
