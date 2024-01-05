import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="bg-gray-100 p-8" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <h2 className="text-3xl font-bold mt-10 mb-10 text-center">What We Do for the Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col items-center">
          <img src="assets/give.svg" alt="Give Icon" className="w-12 h-12 mb-4" />
          <div>
            <h3 className="text-xl font-bold mb-2 text-center">Give</h3>
            <p className='text-gray-600 text-center'>Our foodbanks and medical aid give dignity to the elderly of ages 80 and over. Our scholarship program give hope to young people aspiring for a degree or vocation.</p>
          </div>
        </div>

        
        <div className="flex flex-col items-center">
          <img src="assets/grow.svg" alt="Second Icon" className="w-12 h-12 mb-4" />
          <div>
            <h3 className="text-xl font-bold mb-2 text-center">Grow</h3>
            <p className='text-gray-600 text-center'>Our farming not famine project help the young and able grow income, families grow sustenance and communities grow security.</p>
          </div>
        </div>

        
        <div className="flex flex-col items-center">
          <img src="assets/globe.svg" alt="Third Icon" className="w-12 h-12 mb-4" />
          <div>
            <h3 className="text-xl font-bold mb-2 text-center">Globe</h3>
            <p className='text-gray-600 text-center'>Our training and apprenticeship schemes empower young people to compete globally and become leaders in their areas of expertise.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
