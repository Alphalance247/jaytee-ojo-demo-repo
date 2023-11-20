import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 position:relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div>
          <h2 className="font-semibold">Company</h2>
          <ul className="mt-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Impact Tech</a></li>
          </ul>
        </div>

        
        <div>
          <h2 className="font-semibold">Ways to Give</h2>
          <ul className="mt-2">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
            <li><a href="#">Option 4</a></li>
          </ul>
        </div>

        
        <div>
          <h2 className="font-semibold">Contact Us</h2>
          <address className="mt-2">
            123 Main Street<br />
            City, State ZIP<br />
            Phone: (123) 456-7890
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold">Quick Links</h2>
          <ul className="mt-2">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </div>
        <div className="container mx-auto grid grid-cols-2 mt-6">
        <div>
          <p className="font-semibold">Follow Us</p>
        </div>
        <div className="flex space-x-4">
          <a href="#"><i className="faInstagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 mt-6">
        <div>
          <p className="font-semibold">Subscribe to our newsletter</p>
        </div>
        <div className="flex x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-white rounded-l"
          />
          <button className="bg-white text-gray-900 p-2 rounded-r">
            SignUp
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
