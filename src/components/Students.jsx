import React from 'react';
import indiamap from '../image/india-map.png'

export default function Students() {
  return (
    <section className="bg-sky-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center lg:text-left mb-8 lg:mb-12">
          <p className="text-teal-600 font-semibold text-sm md:text-base mb-2 uppercase tracking-wide">
            WHO WE SERVE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Supporting Evoluer Learing Students Across the Country
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            We meet students where they are — academically and geographically. From tuition-free public schools to tuition-based private schools, Evoluer Learing offers flexibility for students and families no matter their location.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Map Section */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              {/* India Map SVG */}
              <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-8">
                <img src={indiamap} className="w-full h-auto"/>
                
                {/* Stats Badge */}
                <div className="absolute top-4 sm:top-8 md:top-12 right-15 sm:-right-4 md:right-30 bg-white rounded-xl sm:rounded-2xl shadow-xl p-1 sm:p-2 md:p-4 max-w-[140px] sm:max-w-[160px] md:max-w-none">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2f92]">3+</p>
                    <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 uppercase">Million</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-2 font-medium leading-tight">Students Have<br/>Chosen Evoluer Learing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* School Levels Cards */}
          <div className="w-full lg:w-1/3 space-y-3 sm:space-y-4 px-4 sm:px-0">
            {/* Elementary School */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 sm:p-5 md:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Elementary School</h3>
              <p className="text-[#2d2f92] font-semibold underline text-sm sm:text-base">Grades K-5</p>
            </div>

            {/* Middle School */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 sm:p-5 md:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Middle School</h3>
              <p className="text-[#2d2f92] font-semibold underline text-sm sm:text-base">Grades 6-8</p>
            </div>

            {/* High School */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 sm:p-5 md:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">High School</h3>
              <p className="text-[#2d2f92] font-semibold underline text-sm sm:text-base">Grades 9-12</p>
            </div>

            {/* Find a School Button */}
            <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#2d2f92] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Find a School
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}