import React from 'react';

const OurPrograms = () => {
  return (
<section>
  <div className="mx-auto max-w-screen-xl py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 " style={{ padding: '100px' }}>
    <div className="flex flex-col lg:flex-row gap-8">

      
      <div className="lg:py-0">
        <p className="text-gray-600">
          What We Do
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Our Programs</h2>
      </div>

      
      <div className="flex-1" style={{ marginLeft: '200px' }}>
        <p className="text-gray-600" style={{ fontSize: '16px', fontWeight:'400', lineHeight:'24px'}}>
          We are continuously seeking new ways to create a brighter, more inclusive world.
          The Present Projects section showcases our current efforts,
          offering insight into the areas where we are currently making a difference.
        </p>
      </div>

    </div>
  </div>
</section>





  );
};

export default OurPrograms;
