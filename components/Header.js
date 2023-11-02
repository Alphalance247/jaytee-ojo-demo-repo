import React from 'react';

function Header() {
    return (
      <header className="bg-white text-black py-2" style={{ height: '75px' }}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
            <h1 className="text-2xl font-semibold">Your Logo</h1>
          </div>
  
          {/* Main Menu */}
          <div className="flex space-x-4">
            <a href="#" className="px-4 py-2 bg-red-600 text-white">
              Donate Now
            </a>
            <a href="#" className="px-4 py-2 bg-white text-black border border-green-500">
              Impact Tech
            </a>
          </div>
        </div>
  
        {/* Subheader with Six Menu Items */}
        <div className="bg-green-500 text-white py-2 text-center" style={{ height: '65px' }}>
          <div className="container mx-auto">
            <ul className="flex justify-center space-x-4">
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  Menu 1
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  Menu 2
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  Menu 3
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  Menu 4
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  Menu 5
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  Menu 6
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
export default Header;
