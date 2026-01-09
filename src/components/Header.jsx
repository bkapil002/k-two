import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown, Phone, User, Globe } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-12 space-x-6 text-sm">
            <a href="tel:866.968.7512" className="flex items-center  font-semibold text-gray-700 hover:text-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              866.968.7512
            </a>
            <a href="#" className="flex items-center text-gray-700 font-semibold hover:text-blue-600">
              <User className="w-4 h-4 mr-2" />
              K12 School Login
            </a>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <Globe className="w-4 h-4 mr-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <svg className="h-10 w-20" viewBox="0 0 80 40" fill="none">
                <text x="0" y="30" fontSize="32" fontWeight="bold" fill="#0066FF">k12</text>
              </svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="flex items-center text-gray-900 font-bold hover:text-blue-600 ">
              Why K12 <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <a href="#" className="flex items-center text-gray-900 hover:text-blue-600 font-bold">
              Academics <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <a href="#" className="flex items-center text-gray-900 hover:text-blue-600 font-bold">
              Student Life <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <a href="#" className="flex items-center text-gray-900 hover:text-blue-600 font-bold">
              Enroll <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-bold">
              Find a School
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <Search className="w-5 h-5" />
            </button>
            <a href="#" className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
              More Info
            </a>
            <a href="#" className="px-6 py-2.5 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition">
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a href="#" className="text-blue-600 text-sm font-semibold">
              Find a School
            </a>
            <button className="p-2 text-gray-700">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleMenu} className="p-2 text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-1">
            <a href="#" className="flex items-center justify-between py-3 text-gray-900 font-semibold border-b border-gray-100">
              Why K12
              <ChevronDown className="w-5 h-5 text-blue-600" />
            </a>
            <a href="#" className="flex items-center justify-between py-3 text-gray-900 font-semibold border-b border-gray-100">
              Academics
              <ChevronDown className="w-5 h-5 text-blue-600" />
            </a>
            <a href="#" className="flex items-center justify-between py-3 text-gray-900 font-semibold border-b border-gray-100">
              Student Life
              <ChevronDown className="w-5 h-5 text-blue-600" />
            </a>
            <a href="#" className="flex items-center justify-between py-3 text-gray-900 font-semibold border-b border-gray-100">
              Enroll
              <ChevronDown className="w-5 h-5 text-blue-600" />
            </a>
          </nav>

          {/* Mobile Bottom Actions */}
          <div className="px-4 py-4 border-t border-gray-200 space-y-3">
            <a href="#" className="flex items-center justify-center py-2 text-gray-700 font-semibold">
              <User className="w-4 h-4 mr-2" />
              K12 School Login
            </a>
            <a href="tel:866.968.7512" className="flex items-center justify-center py-2 text-gray-700 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              866.968.7512
            </a>
            <div className="flex items-center justify-center py-2 text-gray-700">
              <Globe className="w-4 h-4 mr-2" />
              <span className="font-semibold">English</span>
              <span className="mx-1">|</span>
              <span className="font-semibold">Español</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}