import explore from '../image/Explore.png'

export default function Explore() {
  return (
    <section className="bg-white py-12 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-green-50 via-green-100 to-blue-100 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Explore Everything Evoluer Learing Has to Offer
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
                src={explore}
                alt="Girl with globe" 
                className="block lg:hidden pl- h-auto  rounded-2xl"
              />
              
              {/* Desktop Image */}
              <img 
                src={explore}
                alt="Girl with globe" 
                className="hidden lg:block w-140 h-auto  rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}