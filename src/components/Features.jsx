import React from 'react';

export default function Features() {
  const features = [
    {
      img: 'https://www.k12.com/wp-content/uploads/2025/02/tution-free.svg',
      bgColor: 'bg-yellow-400',
      iconColor: 'text-yellow-900',
      title: 'Tuition-Free Public School',
      subtitle: 'at Home'
    },
    {
      img: 'https://www.k12.com/wp-content/uploads/2025/02/certified-teachers.svg',
      bgColor: 'bg-cyan-400',
      iconColor: 'text-cyan-900',
      title: 'Certified Teachers',
      subtitle: 'Trained in Virtual Instruction'
    },
    {
      img: 'https://www.k12.com/wp-content/uploads/2025/02/award.svg',
      bgColor: 'bg-orange-400',
      iconColor: 'text-orange-900',
      title: 'Accredited Learning',
      subtitle: 'Made to Be Online'
    },
    {
      img: 'https://www.k12.com/wp-content/uploads/2025/02/experience.svg',
      bgColor: 'bg-purple-500',
      iconColor: 'text-purple-100',
      title: '25+ Years of Experience',
      subtitle: 'in Online Education'
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-4"
            >
              {/* Icon */}
              <div className={`${feature.bgColor} ${feature.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                <img src={feature.img} alt={feature.title} />
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}