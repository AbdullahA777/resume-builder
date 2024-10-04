import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500 hover:text-white transition duration-300">Facebook</a>
          <a href="#" className="text-pink-500 hover:text-white transition duration-300">Instagram</a>
          <a href="#" className="text-blue-400 hover:text-white transition duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
