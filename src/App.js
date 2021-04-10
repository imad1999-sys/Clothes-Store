
import SplashScreen from "./Pages/SplashScreen/index.jsx";
import LoginPage from "./Pages/LoginPage/index.jsx";
import SignupPage from "./Pages/SignupPage/index.jsx";
import MainPage from "./Pages/MainPage/index.jsx";
import WomenPage from "./Pages/WomenPage/index.jsx";
import BoysPage from "./Pages/BoysPage/index.jsx";
import MenPage from "./Pages/MenPage/index.jsx";
import GirlsPage from "./Pages/GirlsPage/index.jsx";
import Dashboard from "./components/dashboard.js";
import AddCategory from "./components/addcategorie.js";
import UpdatePage from "./components/updatepage.js";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const app = () => {
  return (
    <div>
      {/* <Router>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/men" component={MenPage} />
        <Route exact path="/women" component={WomenPage} />
        <Route exact path="/boys" component={BoysPage} />
        <Route exact path="/girls" component={GirlsPage} />
      </Router> */}
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/add-category" component={AddCategory} />
        <Route exact path="/update-page/:id" component={UpdatePage} />
      </Router>
    </div>
  );
}
export default app;
