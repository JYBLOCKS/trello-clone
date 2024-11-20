import { Link } from "react-router-dom";
import logo from "../../assets/trello.svg";
function NavBar() {
  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-2">
        <Link
          to="/"
          title="Home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Trello Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Trello clone
          </span>
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
