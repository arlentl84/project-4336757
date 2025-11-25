
const services = [
  {
    icon: "ri-brush-line",
    title: "Cleaning Services",
    description: "Regular cleaning services to maintain a clean and healthy environment in your home or business.",
    features: ["Regular Cleaning", "Deep Cleaning", "House cleaning for Airbnb", "House cleaning for rental properties", "Post-Construction Cleaning", "Post-Renovation Cleaning", "Office cleaning"]
  },
  {
    icon: "ri-paint-brush-line",
    title: "Cleaning maintenance",
    description: "Maintenance cleaning services to keep your space looking and feeling its best.",
    features: ["House and apartment painting", "Handyman services for apartments and houses", "Rental management for apartments and houses on Airbnb", "Cleanliness inspections of clean apartments"]
  }  
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We offer a wide range of cleaning services to meet your unique needs, from regular maintenance to deep cleaning and everything in between. Our team is committed to delivering exceptional results that leave your space looking and feeling its best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-blue-600`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Cleaning Journey?
          </h3>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Let us help you keep your space clean and looking its best. 
            Contact us to start services.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
          >
            Contact Us to Start Services
          </button>
        </div>
      </div>
    </section>
  );
}
