import React from 'react';

export default function Explore() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-green-50 via-green-100 to-blue-100 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Explore Everything K12 Has to Offer
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
                Whether you're looking for full-time schools, tutoring, or career training, we'll find a great match — and it only takes about 5 minutes.
              </p>
              
              <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg border-2 border-gray-900">
                Take the Quiz
              </button>
            </div>

            {/* Image Content - Different images for mobile and desktop */}
            <div className="w-full lg:w-1/2 relative">
              {/* Mobile Image */}
              <img 
                src="https://www.k12.com/wp-content/uploads/2025/11/girl-globe-breakpoint-mobile.png" 
                alt="Girl with globe" 
                className="block lg:hidden w-full h-auto"
              />
              
              {/* Desktop Image */}
              <img 
                src="https://www.k12.com/wp-content/uploads/2025/11/girl-globe-breakpoint-desktop.png" 
                alt="Girl with globe" 
                className="hidden lg:block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}