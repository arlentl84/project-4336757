
export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Houses cleaned annually." },
    { number: "3+", label: "Years Experience" }    
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Cleaning Services Company
            </h2>
            <p className="text-lg text-gray-600 mb-6">
            Founded with a commitment to excellence, our company has been dedicated to creating clean, comfortable, and welcoming spaces for our clients. Over the years, we have provided reliable, detail-oriented cleaning services that bring peace of mind to homes and businesses alike.
            </p>
            <p className="text-lg text-gray-600 mb-8">
            We believe every space deserves to shine. Our team of trained professionals works with care and precision to ensure every corner is spotless, delivering cleanliness you can see and quality you can trust.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/cleaning-company.svg"
              alt="Professional cleaning team in action"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">3+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  );
}
