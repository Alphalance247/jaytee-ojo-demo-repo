  import React from 'react';

  const SectionWithImage = () => {
    return (
      <div
        style={{
          position: 'relative',
          backgroundImage: `url('/assets/image01.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '640px', 
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div style={{ marginTop: -70 }}>
            <h1 style={{ fontSize: '46px', fontWeight:'600', lineHeight: '55.2px' }}>Our Aim is to Offer</h1>
            <h2 style={{ fontSize: '58px', fontWeight:'900', lineHeight: '69.6px' }}>Practical Solutions to Our Communities</h2>
            
            <p style={{ marginTop: '32px' }}>Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros<br />
            bibendum integer orci. Velit vitae eleifend odio ut ipsum gravida.</p>
            <a
              href="/your-link"
              className="bg-#369458 hover:bg-green-600 text-white font-semibold rounded-md inline-block inline-flex items-center justify-center mt-4"
              style={{ background: '#369458', fontSize: '14px', height:'48px', width:'185px',  marginTop: '32px' }}
            >
              MAKE DONATIONS
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default SectionWithImage;
