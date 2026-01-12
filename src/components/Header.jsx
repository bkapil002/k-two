import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown, Phone, User, Globe } from 'lucide-react';
import logo from '../image/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-12 space-x-6 text-sm">
            <a href="tel:866.968.7512" className="flex items-center  font-semibold text-gray-700 hover:text-[#2d2f92]">
              <Phone className="w-4 h-4 mr-2" />
              98252 52525
            </a>
            <a href="/signin" className="flex items-center text-gray-700 font-semibold hover:text-[#2d2f92]">
              <User className="w-4 h-4 mr-2" />
              Login for Student
            </a>
            <button className="flex items-center text-gray-700 hover:text-[#2d2f92]">
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
              <img src={logo} alt='logo' className='w-30 md:w-50' />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="flex items-center text-gray-900  font-semibold hover:text-[#2d2f92] ">
              Why Evoluer Learing 
            </a>
            <a href="#" className="flex items-center text-gray-900 hover:text-[#2d2f92]  font-semibold">
              Progtamme 
            </a>
            <a href="#" className="flex items-center text-gray-900 hover:text-[#2d2f92] font-semibold">
              Activities 
            </a>
            <a href="#" className="flex items-center text-gray-900 hover:text-[#2d2f92]  font-semibold">
              Find a Centers 
            </a>
           
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-[#2d2f92]">
              <Search className="w-5 h-5" />
            </button>
            <a href="#" className="px-6 py-2.5 border-2 border-[#2d2f92] text-[#2d2f92] rounded-full font-semibold hover:bg-blue-50 transition">
              More Info
            </a>
            <a href="/signin" className="px-6 py-2.5 bg-[#2d2f92] text-white rounded-full font-semibold  transition">
              join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a href="#" className="text-[#2d2f92] text-sm font-semibold">
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
              <ChevronDown className="w-5 h-5 text-[#2d2f92]" />
            </a>
            <a href="#" className="flex items-center justify-between py-3 text-gray-900 font-semibold border-b border-gray-100">
              Academics
              <ChevronDown className="w-5 h-5 text-[#2d2f92]" />
            </a>
            <a href="#" className="flex items-center justify-between py-3 text-gray-900 font-semibold border-b border-gray-100">
              Student Life
              <ChevronDown className="w-5 h-5 text-[#2d2f92]" />
            </a>
            <a href="#" className="flex items-center justify-between py-3 text-gray-900 font-semibold border-b border-gray-100">
              Enroll
              <ChevronDown className="w-5 h-5 text-[#2d2f92]" />
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