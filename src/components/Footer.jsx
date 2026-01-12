import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2d2f92] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="text-4xl font-bold">Evoluer e-Learning</div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <MapPin size={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Popular Links */}
          <div>
            <h3 className="font-bold mb-4">Popular Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Evoluer Learing</a></li>
              <li><a href="#" className="hover:underline">What Sets Evoluer Learing Apart</a></li>
              <li><a href="#" className="hover:underline">How Online Learning Works</a></li>
              <li><a href="#" className="hover:underline">A Day in the Life</a></li>
              <li><a href="#" className="hover:underline">Attend an Event</a></li>
              <li><a href="#" className="hover:underline">Evoluer Learing Private Academy</a></li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="font-bold mb-4">Get Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Frequently Asked Questions</a></li>
              <li><a href="#" className="hover:underline">Ask for More Info</a></li>
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Chat</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Find a School */}
          <div>
            <h3 className="font-bold mb-4">Find a School</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Find a School</a></li>
              <li><a href="#" className="hover:underline">How to Enroll</a></li>
              <li><a href="#" className="hover:underline">Begin Enrollment</a></li>
              <li><a href="#" className="hover:underline">Outside the U.S.</a></li>
            </ul>
          </div>

          {/* Schools by State & Company */}
          <div>
            <h3 className="font-bold mb-4">Schools by State</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="#" className="hover:underline">Find a School</a></li>
            </ul>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Stride, Inc.</a></li>
              <li><a href="#" className="hover:underline">Meet Stride</a></li>
              <li><a href="#" className="hover:underline">Mission & Values</a></li>
              <li><a href="#" className="hover:underline">Leadership & Board</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Online Public Schools</a></li>
              <li><a href="#" className="hover:underline">Career and College Prep</a></li>
              <li><a href="#" className="hover:underline">Buy a Course</a></li>
              <li><a href="#" className="hover:underline">Find a Tutor</a></li>
              <li><a href="#" className="hover:underline">For Homeschoolers</a></li>
              <li><a href="#" className="hover:underline">Free Homeschool Lessons</a></li>
              <li><a href="#" className="hover:underline">For School Districts</a></li>
              <li><a href="#" className="hover:underline">For Teachers</a></li>
              <li><a href="#" className="hover:underline">Tallo Career Platform</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="text-xs mb-6 space-y-4 border-t border-[#525391] pt-6">
          <p>
            Families do not pay tuition for a student to attend an online public school. Common household items and office supplies like printer ink and paper are not provided. Our enrollment consultants can help address your technology and computer questions and needs.
          </p>
          <p>
            <a href="#" className="underline hover:no-underline">Florida VPK (Virtual Instruction Program) Provider Disclosure Information</a>
          </p>
          <p>
            Stride (Evoluer Learing Inc.) tracks on the NYSE under the symbol LRN.
          </p>
          <p>
            Copyright © 2025 Stride, Inc. All rights reserved. The Stride wordmark, logo, and other marks referenced herein are trademarks of Stride, Inc. and its subsidiaries. Other company names and trademarks are the property of their respective owners.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-4 text-xs border-t border-[#525391] pt-6">
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Your Privacy Choices </a>
          <a href="#" className="hover:underline">Do Not Sell/Share My Info</a>
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">IP Policy</a>
        </div>
      </div>
    </footer>
  );
}