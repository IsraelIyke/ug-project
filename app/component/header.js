import { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import Link from "next/link";
const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-600 to-white-500 p-3">
      <div className="flex items-center ">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <MdArrowDropDownCircle style={{ fontSize: "2rem" }} />
          </button>
        </div>
        {/* Navigation links */}
        <ul className={`md:flex ${showMenu ? "block" : "hidden"} nav-list`}>
          <li className="md:mr-6">
            <Link className="text-white" href="./">
              Home
            </Link>
          </li>
          <li className="md:mr-6">
            <Link className="text-white" href="./psd-curve">
              Sieve Analysis
            </Link>
          </li>
          <li className="md:mr-6">
            <a className="text-white" href="#services">
              Mix Proportion&Cost
            </a>
          </li>
          <li className="md:mr-6">
            <a className="text-white" href="#contact">
              Calculators
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
