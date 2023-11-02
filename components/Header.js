import React from 'react';

function Header() {
    return (
      <header className="bg-white text-black py-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
            <h1 className="text-2xl font-semibold">Your Logo</h1>
          </div>
  
          {/* Tabs */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="px-4 py-2 bg-red-600 text-white"
            >
              Donate Now
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-white text-black border border-green-500"
            >
              Impact Tech
            </a>
          </div>
        </div>
      </header>
    );
  }
export default Header;
