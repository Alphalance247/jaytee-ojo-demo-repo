const ProgramsCard = () => {
  return (
    <div className="flex flex-wrap -mx-4 mt-8" style={{ marginLeft: '80px', marginRight: '80px' }}>
      <div className="w-full md:w-1/3 px-4 mb-8" style={{ width: '377px', borderRadius: '3px' }}>
        <div className="bg-white overflow-hidden">
          <img src='assets/cardone.png' alt="Card 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Schools Programming Program</h5>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-4 mb-8" style={{ width: '377px', borderRadius: '3px' }}>
        <div className="bg-white overflow-hidden">
          <img src='assets/open.png' alt="Card 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Open Programming Program</h5>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-4 mb-8" style={{ width: '377px', borderRadius: '3px' }}>
        <div className="bg-white overflow-hidden">
          <img src='assets/grow.png' alt="Card 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Grow Campaign</h5>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsCard;
