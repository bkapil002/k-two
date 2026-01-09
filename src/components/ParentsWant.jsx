import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ParentsWant() {
  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    {
      icon: 'https://www.k12.com/wp-content/uploads/2025/02/star.svg',
      title: 'Personalized Learning',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: 'https://www.k12.com/wp-content/uploads/2025/02/map.svg',
      title: 'Your Space, Your Pace',
      bgColor: 'bg-blue-100'
    },
    {
      icon: 'https://www.k12.com/wp-content/uploads/2025/02/laptop.svg',
      title: 'Scheduled Live Classes',
      bgColor: 'bg-cyan-100'
    },
    {
      icon: 'https://www.k12.com/wp-content/uploads/2025/02/cap.svg',
      title: 'Graduation Guaranteed',
      bgColor: 'bg-indigo-100'
    }
  ];

  const faqs = [
    {
      question: 'What is the day-to-day schedule like?',
      answer: 'Students follow a structured daily schedule with live online classes, independent work time, and breaks. The schedule is flexible to accommodate your family\'s needs while ensuring all learning objectives are met.'
    },
    {
      question: 'What is my involvement as a parent or guardian?',
      answer: 'Parents serve as Learning Coaches, helping younger students stay on track with their daily lessons. The time commitment varies by grade level, with younger students requiring more support and older students working more independently.'
    },
    {
      question: 'What materials are sent to me?',
      answer: 'K12 provides all necessary curriculum materials including textbooks, workbooks, art supplies, science lab materials, and any other resources needed for your student\'s courses. Everything is shipped directly to your home.'
    },
    {
      question: 'How do I enroll my student?',
      answer: 'Enrollment is simple! Click the "Learn More" button below to start the process. You\'ll complete an online application, submit required documents, and our enrollment team will guide you through each step.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${feature.bgColor} w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4`}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-10 text-center md:text-left">
            What <span className="bg-blue-600 text-white px-2 py-1 rounded">Parents Want</span> to Know About Online School
          </h2>

          {/* FAQ Items */}
          <div className="space-y-3 md:space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-full text-sm md:text-base lg:text-lg transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
              Learn More
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}