import React from "react";
import {Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
        to="/">
            <h1 className="text-4xl font-bold">Resume Builder</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive ? "font-bold" : "font-semibold"
                  } cursor-pointer`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resume-builder"
                className={({isActive}) =>
                  `hover:underline ${
                    isActive ? "font-bold" : "font-semibold"
                  } cursor-pointer`
                }
              >
                Build CV
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
