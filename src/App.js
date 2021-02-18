import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { NavBar, SimpleComponent, StatefulComponent } from "./components";
console.log(Route, Switch, Link);

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/simple-component">
          <SimpleComponent name="Colby" />
        </Route>

        <Route path="/stateful-component">
          <StatefulComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
