import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
const Header = () => {
  let btnName = "Login";
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  // const { loggedInUser } = useContext(UserContext);
  const isonline = useOnline();
  // Subscribing to the store using the Selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex flex-wrap justify-between bg-blue-300 shadow-lg mb-2 px-2 py-2 md:px-6 md:py-3 items-center">
      <div className="w-20 md:w-24 flex-shrink-0 flex justify-center md:justify-start">
        <Link to="/">
          <img className="logo w-16 md:w-24" src={LOGO_URL} alt="no" />
        </Link>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden absolute right-4 top-4 text-2xl focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        <span>{menuOpen ? "✕" : "☰"}</span>
      </button>
      {/* Nav links */}
      <div
        className={`w-full md:w-auto ${
          menuOpen ? "block" : "hidden"
        } md:flex items-center justify-center md:justify-end bg-blue-300 md:bg-transparent absolute md:static left-0 top-16 md:top-0 z-30 md:z-auto transition-all duration-200`}
      >
        <ul className="flex flex-col md:flex-row p-2 md:p-4 m-0 md:m-4 text-base md:text-lg w-full md:w-auto justify-center md:justify-end">
          <li className="px-2 md:px-4 py-2 md:py-0">
            {isonline ? "✅" : "❌"}
          </li>
          <li className="px-2 md:px-4 py-2 md:py-0">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 md:px-4 py-2 md:py-0">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 md:px-4 py-2 md:py-0">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-2 md:px-4 py-2 md:py-0">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping font-bold text-xl">
                {cartItems.length}
              </i>
            </Link>
          </li>
          <li className="px-2 md:px-4 py-2 md:py-0">
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
          {/* <li className="mx-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
