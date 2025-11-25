
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              Voyager
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
            Your trusted partner in creating clean, comfortable, and welcoming spaces. We provide comprehensive cleaning services 
            for homes and businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                <span>dbdhandyman2016@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                <span>+1 (818) 626-7064</span>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                <span>DBD Handyman, LLC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Publishing Company. All rights reserved. 
            
          </p>
        </div>
      </div>
    </footer>
  );
}
