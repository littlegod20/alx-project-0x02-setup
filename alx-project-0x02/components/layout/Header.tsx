import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            ALX Project 2
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

