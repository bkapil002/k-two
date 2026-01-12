import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoGallery() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const videos = [
    {
      id: 1,
      title: "Introduction to Online Learning",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      duration: "5:30",
      category: "Getting Started"
    },
    {
      id: 2,
      title: "Student Success Stories",
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      duration: "8:45",
      category: "Inspiration"
    },
    {
      id: 3,
      title: "Virtual Classroom Tour",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      duration: "6:15",
      category: "Campus Life"
    },
    {
      id: 4,
      title: "Teacher Teaching Methods",
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      duration: "7:20",
      category: "Teaching"
    },
    {
      id: 5,
      title: "Parent Testimonials",
      thumbnail: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=400&fit=crop",
      duration: "4:50",
      category: "Community"
    },
    {
      id: 6,
      title: "Interactive Learning Activities",
      thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
      duration: "9:10",
      category: "Activities"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, videos.length));
  };

  const VideoCard = ({ video }) => (
    <div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex-shrink-0"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 sm:w-18 sm:h-18 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-[#2d2f92] group-hover:scale-110 transition-all duration-300 shadow-xl">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#2d2f92] group-hover:text-white ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs sm:text-sm font-semibold">
          {video.duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#2d2f92] transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2">Click to watch</p>
      </div>
    </div>
  );

  return (
    <section className=" -mt-5 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-teal-600 font-semibold text-sm md:text-base mb-2 uppercase tracking-wide">
            WATCH & LEARN
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Our Video Teaching Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of educational videos showcasing our teaching methods, student experiences, and learning environment.
          </p>
        </div>

        {/* Mobile Slider (visible only on small screens) */}
        <div className="block sm:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {videos.map((video) => (
                <div key={video.id} className="w-full px-3 flex-shrink-0">
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
            
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#2d2f92] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
              <button
                className="px-7 py-2 bg-[#2d2f92] text-white text-[17px] font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Load More
              </button>
            </div>
        </div>

        {/* Grid for Tablet and Desktop */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videos.slice(0, visibleCount).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>


            <div className="flex justify-center mt-10">
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-[#2d2f92] text-white text-lg font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Load More
              </button>
            </div>

        </div>


      </div>
    </section>
  );
}