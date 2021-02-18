import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./simple-component">Simple</Link>
        </li>
        <li>
          <Link to="./stateful-component">Stateful</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
