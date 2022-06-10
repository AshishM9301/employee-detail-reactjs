import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div
            className="collapse navbar-collapse flex flex-grow items-center"
            id="navbarSupportedContent1"
          >
            <Link className="text-xl text-white pr-2 font-semibold" to="/">
              HomePage
            </Link>
            {/* Left links */}
            <ul className="navbar-nav flex flex-col md:flex-row pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <Link className="nav-link text-white" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  to="/employees"
                >
                  Employees
                </Link>
              </li>
            </ul>
            {/* Left links */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
