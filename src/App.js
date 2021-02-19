import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Countdown, NavBar, Simple, Stateful, Todo } from "./components";

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/simple-component">
          <Simple name="Taylor" />
        </Route>

        <Route path="/stateful-component">
          <Stateful />
        </Route>

        <Route path="/countdown">
          <Countdown />
        </Route>

        <Route path="/todo">
          <Todo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
