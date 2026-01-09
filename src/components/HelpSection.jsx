import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HelpSection() {
  return (
    <section className="bg-sky-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 md:mb-12">
          
          {/* Contact Us Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                We're Here to Help
              </h3>
              <div className="flex-shrink-0 ml-4">
                <img
                  src="https://www.k12.com/wp-content/uploads/2025/02/contact-icon-1.svg"
                  alt="Contact Us"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </div>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              Have questions or not sure what step to take next? Let us help figure it out.
            </p>
            
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-sm md:text-base lg:text-lg transition-colors group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Enroll Now Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Take the Next Step
              </h3>
              <div className="flex-shrink-0 ml-4">
                <img
                  src="https://www.k12.com/wp-content/uploads/2025/02/enroll-icon.svg"
                  alt="Enroll Now"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </div>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              Ready to sign up? We can't wait to welcome your family to the K12 community.
            </p>
            
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-sm md:text-base lg:text-lg transition-colors group"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Disclaimers */}
        <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
          <p>
            K12 has served more than 3M registered learners through its managed public schools, private schools, and Learning Solutions. This information is directly from the Stride User Dashboard, which meticulously tracks registrations for every Stride product and service.
          </p>
          <p>
            Individual class schedules and requirements will vary by state, school, and the individual needs of each student. Course materials vary, and certain schools may not provide computers or may have specific requirements for providing equipment.
          </p>
          <p className="text-xs">
            <sup>1</sup>Donesha is the parent of a 2022 student at a K12-powered school in VA, and their statement reflects their experience at their child's school.
          </p>
        </div>
      </div>
    </section>
  );
}