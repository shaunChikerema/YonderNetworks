import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yonder Networks</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
