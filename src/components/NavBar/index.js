import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link
            to="/simple-component"
            className="text-indigo-700  hover:text-opacity-100 transition duration-150 ease-in-out"
          >
            Simple
          </Link>
        </li>
        <li>
          <Link
            to="/stateful-component"
            className="text-indigo-700  hover:text-opacity-100 transition duration-150 ease-in-out"
          >
            Stateful
          </Link>
        </li>
        <li>
          <Link
            to="/countdown"
            className="text-indigo-700  hover:text-opacity-100 transition duration-150 ease-in-out"
          >
            Countdown
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
