import { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Your Website Name</div>
        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            click
          </button>
        </div>
        {/* Navigation links */}
        <ul className={`md:flex ${showMenu ? "block" : "hidden"}`}>
          <li className="md:mr-4">
            <a className="text-white hover:text-gray-200" href="#home">
              Home
            </a>
          </li>
          <li className="md:mr-4">
            <a className="text-white hover:text-gray-200" href="#about">
              About
            </a>
          </li>
          <li className="md:mr-4">
            <a className="text-white hover:text-gray-200" href="#services">
              Services
            </a>
          </li>
          <li className="md:mr-4">
            <a className="text-white hover:text-gray-200" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
