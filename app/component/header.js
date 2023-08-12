import { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import Link from "next/link";
const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    // <nav className="bg-gradient-to-r from-yellow-600 to-white-500 p-3">
    <nav className="bg-yellow-600 p-3">
      <div className="flex nav flex-col md:flex-row items-center md:items-left">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <MdArrowDropDownCircle style={{ fontSize: "2rem" }} />
          </button>
        </div>
        {/* Navigation links */}
        <ul className={`md:flex ${showMenu ? "block" : "hidden"} nav-list`}>
          <Link className="text-white" href="./">
            {" "}
            <li className="md:mr-6">Home</li>{" "}
          </Link>
          <Link className="text-white" href="./psd-curve">
            <li className="md:mr-6">Sieve Analysis</li>
          </Link>
          <Link className="text-white" href="./mix-proportion">
            <li className="md:mr-6">Mix Proportion&Cost</li>{" "}
          </Link>
          <Link className="text-white" href="./converter">
            <li className="md:mr-6">Converter&Chart</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
