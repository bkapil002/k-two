import React from 'react';

export default function Students() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center lg:text-left mb-8 lg:mb-12">
          <p className="text-teal-600 font-semibold text-sm md:text-base mb-2 uppercase tracking-wide">
            WHO WE SERVE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Supporting K–12 Students Across the Country
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            We meet students where they are — academically and geographically. From tuition-free public schools to tuition-based private schools, K12 offers flexibility for students and families no matter their location.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Map Section */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              {/* India Map SVG */}
              <div className="relative w-full max-w-2xl mx-auto">
                <svg viewBox="0 0 600 700" className="w-full h-auto">
                  {/* India Map Outline */}
                  <path
                    d="M 300 50 L 320 70 L 340 65 L 360 80 L 380 75 L 400 90 L 420 100 L 430 120 L 440 140 L 445 160 L 448 180 L 450 200 L 448 220 L 445 240 L 440 260 L 430 280 L 420 300 L 410 320 L 400 340 L 390 360 L 380 380 L 370 400 L 360 420 L 350 440 L 340 460 L 330 480 L 320 500 L 310 520 L 300 540 L 290 560 L 280 580 L 270 600 L 260 610 L 250 615 L 240 610 L 230 600 L 220 580 L 210 560 L 200 540 L 190 520 L 180 500 L 170 480 L 160 460 L 150 440 L 145 420 L 142 400 L 140 380 L 142 360 L 145 340 L 150 320 L 160 300 L 170 280 L 180 260 L 190 240 L 200 220 L 210 200 L 220 180 L 230 160 L 240 140 L 250 120 L 260 100 L 270 90 L 280 80 L 290 70 L 300 50 Z"
                    fill="#3B82F6"
                    className="opacity-80"
                  />
                  
                  {/* Student Avatars with Circles */}
                  {/* North */}
                  <circle cx="280" cy="150" r="25" fill="#EC4899" />
                  <circle cx="280" cy="150" r="20" fill="white" />
                  <text x="280" y="157" textAnchor="middle" fontSize="20">👧</text>
                  
                  {/* West */}
                  <circle cx="180" cy="320" r="25" fill="#F59E0B" />
                  <circle cx="180" cy="320" r="20" fill="white" />
                  <text x="180" y="327" textAnchor="middle" fontSize="20">👦</text>
                  
                  {/* Center */}
                  <circle cx="300" cy="300" r="25" fill="#8B5CF6" />
                  <circle cx="300" cy="300" r="20" fill="white" />
                  <text x="300" y="307" textAnchor="middle" fontSize="20">👧</text>
                  
                  {/* East */}
                  <circle cx="400" cy="280" r="25" fill="#10B981" />
                  <circle cx="400" cy="280" r="20" fill="white" />
                  <text x="400" y="287" textAnchor="middle" fontSize="20">👦</text>
                  
                  {/* South */}
                  <circle cx="290" cy="500" r="25" fill="#EF4444" />
                  <circle cx="290" cy="500" r="20" fill="white" />
                  <text x="290" y="507" textAnchor="middle" fontSize="20">👧</text>
                </svg>
                
                {/* Stats Badge */}
                <div className="absolute top-4 left-4 bg-white rounded-2xl shadow-xl p-4 md:p-6">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-blue-600">3+</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-600 uppercase">Million</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-2 font-medium">Students Have<br/>Chosen K12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* School Levels Cards */}
          <div className="w-full lg:w-1/3 space-y-4">
            {/* Elementary School */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Elementary School</h3>
              <p className="text-blue-600 font-semibold underline">Grades K-5</p>
            </div>

            {/* Middle School */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Middle School</h3>
              <p className="text-blue-600 font-semibold underline">Grades 6-8</p>
            </div>

            {/* High School */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">High School</h3>
              <p className="text-blue-600 font-semibold underline">Grades 9-12</p>
            </div>

            {/* Find a School Button */}
            <button className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Find a School
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}