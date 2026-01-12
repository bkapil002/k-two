import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Stories() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="https://www.k12.com/wp-content/uploads/2025/02/K12-HP-Testimonial-Donesha-Desktop.png"
                alt="Donesha - K12 Parent"
                className="w-full h-64 md:w-full md:h-80 lg:w-full lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <p className="text-purple-700 font-bold text-xs md:text-sm mb-2 uppercase tracking-wider">
              REAL Evoluer Learing STORIES
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
              Why <span className="text-gray-600">Families Love Us</span>
            </h2>
            
            <blockquote className="mb-6 lg:mb-8">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-900 leading-relaxed mb-4">
                "Evoluer Learing empowers us to take our time back. It gives us control of our schedule. It gives us control of us raising our children the way that we want to raise them and for them to succeed in life."
              </p>
            </blockquote>

            <div className="text-sm md:text-base text-gray-600 mb-8 lg:mb-10">
              <p>
                <strong className="text-gray-900">Donesha</strong>, <em>Mom and Learning Coach for two 3rd Graders and two 11th Graders + Military Spouse<sup>1</sup></em>
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#2d2f92]  text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-sm md:text-base lg:text-lg transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
                Explore More Stories
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




