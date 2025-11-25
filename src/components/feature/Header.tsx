import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
              Voyager
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">News</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
              <Button 
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="sm"
                className="w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
