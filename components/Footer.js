import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
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
      </div>
    </footer>
  );
}

export default Footer;
