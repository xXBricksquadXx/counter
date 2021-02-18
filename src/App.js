import { NavBar, SimpleComponent, StatefulComponent } from "./components";
console.log(StatefulComponent);
function App() {
  return (
    <>
      <NavBar />
      <SimpleComponent name="Taylor" />
    </>
  );
}

export default App;
