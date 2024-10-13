import { useState, useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [isLogged, setLogged] = useState(true);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect");
  }, []);
  const btnName = isLogged ? "Logout" : "Login";

  return (
    <nav
      id="header"
      className="bg-red-400 flex justify-between items-center py-2 shadow-xl shadow-red-200"
    >
      <Link to="/">
        <div id="nav-logo" className="bg-white rounded-[50%] p-2 w-[55px] ml-4">
          <img src={LOGO_URL} className="" alt="logo" />
        </div>
      </Link>

      <ul className="flex justify-evenly w-[50%] items-center text-white">
        <li className="text-sm">Online Status {onlineStatus ? "✅" : "❌"}</li>
        <li className="text-sm">
          <Link to="/">Home</Link>
        </li>
        <li className="text-sm">
          <Link to="/about">About</Link>
        </li>
        <li className="text-sm">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="text-sm">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="text-sm">Cart</li>
        <button
          className={
            isLogged
              ? "text-sm border-2 border-white px-4 py-1 rounded-md"
              : "text-sm bg-white text-red-400 rounded-md px-4 py-1"
          }
          onClick={() => {
            setLogged(!isLogged);
          }}
        >
          {btnName}
        </button>
      </ul>
    </nav>
  );
};

export default Header;
