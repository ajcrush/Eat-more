import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
const Header = () => {
  let btnName = "Login";
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const { loggedInUser } = useContext(UserContext);
  const isonline = useOnline();
  // Subscribing to the store using the Selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-blue-300 shadow-lg mb-2 px-2">
      <div className="w-24">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="no" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{isonline ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping font-bold text-xl">
                {cartItems.length}
              </i>
            </Link>
          </li>
          <li className="px-4">
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
