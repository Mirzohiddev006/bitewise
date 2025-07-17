import React from "react";

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-between px-6 py-4">
    <div className="font-bold text-2xl text-green-800 tracking-wide">
      BiteWise
    </div>
    <ul className="flex gap-6 text-base font-medium">
      <li>
        <a href="#features" className="hover:text-green-700 transition">
          Features
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-green-700 transition">
          About
        </a>
      </li>
      <li>
        <a href="#faq" className="hover:text-green-700 transition">
          FAQ
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-green-700 transition">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
