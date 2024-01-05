import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


import React from 'react';

const Jlayout = ({ children }) => {
  return (
    <div>
      <div>
      <Header />
        {children}
      <Footer />
      </div>
    </div>
  );
};

export default Jlayout;
