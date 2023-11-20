import React from 'react';



function Header() {
    return (
      <header className="bg-white text-black" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container mx-auto flex items-center justify-between pl-20 pr-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className=" mr-2" />
          </div>
  
          {/* Main Menu */}
          <div className="flex space-x-4">
          <a href="#" className="px-4 py-2 bg-red-600 text-white flex items-center">
            <h3><i>Donate Now ♥ </i></h3>
          </a>
            <a href="#" className="px-4 py-2 bg-white text-black border border-green-500 text-green">
             <h3>Impact Tech ↗ </h3>
            </a>
          </div>
        </div>
  
        {/* Padding*/}
        <div className="py-2" />
        {/* Subheader */}
        <div className=" text-white" style={{ background: '#369458' }}>
          <div className="container mx-auto flex items-center justify-center" style={{ height: '65px' }}>
            <ul className="flex space-x-4 gap-7">
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
