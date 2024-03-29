// import those pages in App.js
// then based on the path show each components using react-router components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";
// components
import Home from "./Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";
import AccountDashboard from "./user/AccountDashboard";
import NewHotel from "./hotels/NewHotel";
import EditAccountDashboard from "./user/EditAccountDashboard";
import Connect from "./user/ConnectDashboard"
import ConnectDashboard from "./user/ConnectDashboard";
import VenturePopup from "./auth/VenturePopup";

/**
 * Lets create TopNavigation/menu bar so that we can easily TopNavigate between pages
 * lets write it in App.js before we move it to its own component
 */

function App() {

  
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center"/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/VenturePopup" component={VenturePopup} />
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/dashboard/editAccount"
          component={EditAccountDashboard}
        />
        <PrivateRoute
          exact
          path="/dashboard/account"
          component={AccountDashboard}
        />
        <PrivateRoute
          exact
          path="/dashboard/connect"
          component={ConnectDashboard}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
