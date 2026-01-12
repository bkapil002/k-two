import React from 'react';
import { Heart } from 'lucide-react';

export default function K12Hero() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
              India’s first comprehensive online programme dedicated to neurodiversity students
            </h1>
            
            <p className="text-base sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              The programme empowers diverse learners through personalised support, expert guidance, and accessible digital education, fostering academic growth, life skills, and long-term independence in a professional, supportive environment.
            </p>
            
            <button className="inline-flex items-center px-8 py-4 bg-[#2d2f92] text-white text-lg font-semibold rounded-full hover:bg-[#2d2f92] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img 
              src="https://www.k12.com/wp-content/uploads/2025/07/K12-HP-Hero-Large-Desktop.png" 
              alt="K12 Online Learning" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}