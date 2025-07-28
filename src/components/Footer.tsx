import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/logo" alt="Batteiger Logo" className="w-10 h-10 rounded-lg object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Batteiger</h3>
                <p className="text-sm text-gray-400">Lawn & Snow Care</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional lawn care and snow removal services for residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/BatteigerLawnService?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/batteigerlawnservice/?hl=fr-ca" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#top" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about#top" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services#top" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog#top" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact#top" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Lawn Mowing</span>
              </li>
              <li>
                <span className="text-gray-400">Weed Control</span>
              </li>
              <li>
                <span className="text-gray-400">Fertilization</span>
              </li>
              <li>
                <span className="text-gray-400">Dethatching/Aeration/Overseeding</span>
              </li>
              <li>
                <span className="text-gray-400">Leaf Cleanup</span>
              </li>
              <li>
                <span className="text-gray-400">Snow Removal (Residential/Commercial)</span>
              </li>
              <li>
                <span className="text-gray-400">Salting/Deicing</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400" />
                <a
                  href="tel:+14062089025"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  (406) 208-9025
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <a
                  href="mailto:batteigerlawnservice@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  batteigerlawnservice@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-400">
                  7680 Old Hwy 2, Palermo, ND 58769
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Batteiger Lawn & Snow Care Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;