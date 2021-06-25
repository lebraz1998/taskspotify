import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../../ui/home/home";
import Logged from "../../ui/logged/logged";
import Login from "../../ui/login/login";
import { Text } from "@chakra-ui/react";
import Info from "../../ui/info/info";
export function FirstRoute() {
  return (
    <div style={{ backgroundColor: "var(--chakra-colors-gray-50)" }}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />

          <Route path="/user**" component={UserRoute} />
          <Route path="/logged**" component={Logged} />
          <Redirect from="*" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

const NavBar = () => (
  <nav>
    <div style={{ padding: 10, background: "#bdc3c7", marginBottom: 10 }}>
      <Text fontSize="25px" color="black" fontWeight="medium">
        {" "}
        Spotify Artist Search
      </Text>
    </div>
  </nav>
);

function UserRoute() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/user/home/:id/:name" component={Info} />
        <Route path="/user/home" component={Home} />
      </Switch>
    </Router>
  );
}
