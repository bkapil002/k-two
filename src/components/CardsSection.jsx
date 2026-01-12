import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CardsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      image: 'https://www.k12.com/wp-content/uploads/2026/01/K12_Midyear_HomepageTile.webp',
      title: "There's Still Time to Enroll Midyear",
      description: "Want a better option for your child, but worried about switching schools midyear? Transfer with Evoluer Learing and get the support you need every step of the way.",
      linkText: "Transfer today!",
      linkUrl: "#"
    },
    {
      image: 'https://www.k12.com/wp-content/uploads/2026/01/K12Voices_Card-updated.webp',
      title: "What's your online school story?",
      description: "Was it flexible scheduling, personalized learning, or new opportunities that made Evoluer Learing right for your family? Every student has a story, and we want to know yours.",
      linkText: "Join Our Evoluer Learing Voices",
      linkUrl: "#"
    },
    {
      image: 'https://www.k12.com/wp-content/uploads/2025/11/Innovation-Challenge_Promo-Card.png',
      title: "Your Student's Idea Can Shape the Future",
      description: "Got a creative thinker at home? The Evoluer Learing Innovation Challenge invites all students in grades 6-12 to pitch ideas that could shape the future of learning. Their big idea could win them $500!",
      linkText: "Get Contest Details",
      linkUrl: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="bg-sky-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop View - 3 Cards Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video w-full h-40 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 min-h-[120px]">
                  {card.description}
                </p>
                <a
                  href={card.linkUrl}
                  className="inline-block text-[#2d2f92] font-bold text-sm lg:text-base transition-colors"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={cards[currentSlide].image}
                  alt={cards[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {cards[currentSlide].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {cards[currentSlide].description}
                </p>
                <a
                  href={cards[currentSlide].linkUrl}
                  className="inline-block text-[#2d2f92]hover:text-blue-700 font-bold text-sm transition-colors"
                >
                  {cards[currentSlide].linkText}
                </a>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-start gap-4 mt-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-[#2d2f92]hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#2d2f92]hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2 ml-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-[#2d2f92]w-6'
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}