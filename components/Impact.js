import React from 'react';

const Impact = () => {
  return (
<section>
  <div className="mx-auto max-w-screen-xl py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 " style={{ padding: '100px' }}>
    <div className="flex flex-col lg:flex-row gap-8">

      
      <div className="lg:py-0">
        <h2 className="text-3xl font-bold sm:text-4xl">Your Impact</h2>
        <h2 className="text-3xl font-bold sm:text-4xl">Over the Years</h2>
        <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      
      {/* stats place */}
      <div className="flex-1" style={{ marginLeft: '50px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-3">
            <div className="flex items-center">
                <img src="assets/book.svg" alt="Give Icon" className="w-12 h-12 mb-4" />
                <span className="ml-2" style={{color:'#369458', fontSize:'46px', fontWeight:'700', fontFamily:'roboto slab'}}>20,000</span>
            </div>
            <hr />
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra  bibendum viverra bibendum.</p>

        </div>
        <div className="p-3">
            <div className="flex items-center">
                <img src="assets/book.svg" alt="Give Icon" className="w-12 h-12 mb-4" />
                <span className="ml-2" style={{color:'#369458', fontSize:'46px', fontWeight:'700', fontFamily:'roboto slab'}}>20,000</span>
            </div>
            <hr />
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra  bibendum viverra bibendum.</p>
        </div>
        <div className="p-3">
            <div className="flex items-center">
                <img src="assets/book.svg" alt="Give Icon" className="w-12 h-12 mb-4" />
                <span className="ml-2" style={{color:'#369458', fontSize:'46px', fontWeight:'700', fontFamily:'roboto slab'}}>20,000</span>
            </div>
            <hr />
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra  bibendum viverra bibendum.</p>

        </div>
        <div className="p-3">
            <div className="flex items-center">
                <img src="assets/book.svg" alt="Give Icon" className="w-12 h-12 mb-4" />
                <span className="ml-2" style={{color:'#369458', fontSize:'46px', fontWeight:'700', fontFamily:'roboto slab'}}>20,000</span>
            </div>
            <hr />
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra  bibendum viverra bibendum.</p>

        </div>
      </div>
    </div>
    </div>
  </div>
</section>





  );
};

export default Impact;
