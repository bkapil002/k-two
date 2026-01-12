import React from 'react';

export default function OnlineLearning() {
  return (
    <section className="bg-white -mt-15 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <p className="text-purple-700 font-bold text-sm md:text-base mb-3 uppercase tracking-wide">
              HOW IT WORKS
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Online Learning That Helps Students Succeed
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dedicated teachers, quality curriculum, learning materials, and supportive community make for a great school experience. Evoluer Learing provides everything your child needs to thrive.
            </p>
          </div>

          {/* Image Content */}
           <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-2xl mx-auto">
              
              {/* Blue Circle – Mobile Only */}
              <div className="absolute inset-0 w-60 left-15 aspect-square bg-[#2d2f92] rounded-full md:hidden"></div>

              {/* Image */}
              <img
                src="https://www.k12.com/wp-content/uploads/2025/02/K12-HP-HowItWorks-Desktop.png"
                alt="K12 Online Learning"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

