import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Resume Builder</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Features</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
