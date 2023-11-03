import React from 'react';

function Header() {
    return (
      <header className="bg-white text-black py-2" style={{ height: '75px' }}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className=" mr-2" />
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
  
        {/* Padding*/}
        <div className="py-2" />
  
        {/* Subheader */}
        <div className="bg-green-500 text-white" style={{ height: '65px' }}>
          <div className="container mx-auto flex items-center justify-center">
            <ul className="flex space-x-4">
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  ABOUT US
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  GET INVOLVED
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  OUR PROJECTS
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  MEDIA
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  NEWS & STORIES
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white border-b-2 border-transparent hover:border-white">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
export default Header;
