import React from 'react';

const Trainer = () => {
  return (
    <div className="flex" style={{ border: '10px solid', borderColor:'#3BA361', marginLeft: '100px', marginRight: '100px', marginBottom:'50PX' }}>
      <div className="flex-1">
        <div
          className="bg-cover bg-center h-screen" 
          style={{ backgroundImage: 'url("assets/trainer.png")', height: '400px', width:'500px' }}
        ></div>
      </div>

      <div className="flex-1 p-8" style={{height: '400px', width:'500px' }}>
      <h1 className="">OUR INITIATIVE</h1>
        <h1 className="text-4xl font-bold mb-4">Train the Trainer</h1>
        <p className="text-md text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra  bibendum viverra bibendum. Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra  bibendum viverra bibendum. Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra  bibendum viverra bibendum.
        </p>
        <button style={{ marginTop:'40px', backgroundColor: '#3BA361', color: 'white' }} className="py-2 px-4 rounded">
        LEARN MORE
        </button>

      </div>
    </div>
  );
};

export default Trainer;
