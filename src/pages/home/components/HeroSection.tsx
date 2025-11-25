import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

const carouselData = [
  {
    id: 1,
    title: "Professional Cleaning Services",
    subtitle: "Residential & Commercial Excellence",
    description: "House cleaning for Airbnb, apartment cleaning for rental properties, post-construction or post-remodeling house cleaning, and house cleaning for sale properties. We ensure every space is spotless and ready.",
    image: "https://readdy.ai/api/search-image?query=Professional%20cleaning%20service%20team%20working%20in%20modern%20bright%20office%20space%2C%20spotless%20clean%20environment%2C%20cleaning%20staff%20in%20uniform%20using%20professional%20equipment%2C%20sparkling%20clean%20floors%20and%20windows%2C%20fresh%20and%20hygienic%20atmosphere%2C%20commercial%20cleaning%20excellence%2C%20high-quality%20professional%20service&width=1200&height=600&seq=hero1clean&orientation=landscape"
  },
  {
    id: 2,
    title: "Property Management & Maintenance",
    subtitle: "Complete Property Solutions",
    description: "House and apartment painting, handyman services for apartments and houses, cleaning of common areas in residential and commercial buildings, and office cleaning. Your property in expert hands.",
    image: "https://readdy.ai/api/search-image?query=Professional%20cleaner%20using%20modern%20cleaning%20equipment%20in%20pristine%20residential%20home%2C%20sparkling%20clean%20living%20room%20with%20natural%20sunlight%2C%20organized%20cleaning%20supplies%2C%20immaculate%20surfaces%2C%20fresh%20and%20sanitized%20environment%2C%20residential%20cleaning%20service%20excellence%2C%20attention%20to%20detail&width=1200&height=600&seq=hero2clean&orientation=landscape"
  },
  {
    id: 3,
    title: "Rental Management Services",
    subtitle: "Airbnb & Property Care",
    description: "Rental management for apartments and houses on Airbnb, cleanliness inspection of cleaned apartments. We handle everything from cleaning to quality control for your rental properties.",
    image: "https://readdy.ai/api/search-image?query=Professional%20deep%20cleaning%20service%20in%20commercial%20kitchen%2C%20stainless%20steel%20surfaces%20gleaming%2C%20sanitized%20workspace%2C%20cleaning%20professionals%20in%20protective%20gear%2C%20spotless%20hygienic%20environment%2C%20industrial%20cleaning%20excellence%2C%20thorough%20disinfection%20process%2C%20professional%20cleaning%20standards&width=1200&height=600&seq=hero3clean&orientation=landscape"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="relative h-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-3xl text-white">
                  <p className="text-lg md:text-xl text-blue-300 mb-4">{slide.subtitle}</p>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Your Journey
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-gray-900"
                      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Our Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all cursor-pointer"
        >
          <i className="ri-arrow-left-line text-xl"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all cursor-pointer"
        >
          <i className="ri-arrow-right-line text-xl"></i>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
