const LearnMore = () => {
    return (
    <div>
        <div className="flex flex-wrap -mx-4 mt-8" style={{ marginLeft: '80px', marginRight: '80px' }}>
            <h1 className="p-4 text-3xl font-bold">Learn More About Us</h1>
        </div>
      <div className="flex flex-wrap -mx-4 mt-8" style={{ marginLeft: '80px', marginRight: '80px' }}>
        <div className="w-full md:w-1/3 px-4 mb-8" style={{ width: '377px', borderRadius: '3px' }}>
          <div className="bg-white overflow-hidden">
            <img src='assets/who.png' alt="Card 2" className="w-full h-48 object-cover" />
            <p className="p-4 text-sm">WHO WE ARE</p>
            <div className="p-4">
              <h5 className="text-md font-bold mb-2">About Jaytee Ojo Foundation</h5>
              <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.</p>

              <a href="" className="font-bold text-sm" style={{color:'#3BA361' }}>LEARN MORE</a>
            </div>
          </div>
        </div>
  
        <div className="w-full md:w-1/3 px-4 mb-8" style={{ width: '377px', borderRadius: '3px' }}>
          <div className="bg-white overflow-hidden">
            <img src='assets/port.png' alt="Card 2" className="w-full h-48 object-cover" />
            <p className="p-4 text-sm">OUR PORTFOLIO</p>
            <div className="p-4">
              <h5 className="text-md font-bold mb-2">Creating Impact Through Action</h5>
              <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.</p>

                <a href="" className="font-bold text-sm" style={{color:'#3BA361' }}>LEARN MORE</a>
            </div>
          </div>
        </div>
  
        <div className="w-full md:w-1/3 px-4 mb-8" style={{ width: '377px', borderRadius: '3px' }}>
          <div className="bg-white overflow-hidden">
            <img src='assets/part.png' alt="Card 2" className="w-full h-48 object-cover" />
            <p className="p-4 text-sm">OUR PARTNERSHIP</p>
            <div className="p-4">
              <h5 className="text-md font-bold mb-2">Our Initiatives in Action</h5>
              <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.</p>

                <a href="" className="font-bold text-sm" style={{color:'#3BA361' }}>LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default LearnMore;
  