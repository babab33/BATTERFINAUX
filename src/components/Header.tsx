import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <img src="/logo" alt="Batteiger Logo" className="w-10 h-10 rounded-lg object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Batteiger</h1>
              <p className="text-xs text-gray-500">Lawn & Snow Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${
                isActive('/about') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors duration-200 ${
                isActive('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={`font-medium transition-colors duration-200 ${
                isActive('/blog') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                isActive('/contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+14062089025"
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(406) 208-9025</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/about') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/blog') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="tel:+14062089025"
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors duration-200 mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(406) 208-9025</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;