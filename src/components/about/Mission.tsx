
import React from 'react';

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-construction-red mb-6"></div>
            <p className="text-lg mb-6 leading-relaxed">
              To transform Karachi's skyline through innovative construction solutions that exceed client expectations, 
              while maintaining the highest standards of quality, safety, and sustainability.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We strive to deliver projects on time and within budget, employing cutting-edge technology and 
              best practices to ensure excellence in every aspect of our work.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Integrity', 'Excellence', 'Innovation', 'Safety', 'Collaboration', 'Sustainability'].map((value, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-construction-red mr-2"></div>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
                alt="Construction team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-10 -left-10 bg-construction-red p-8 rounded-lg shadow-lg text-white text-center hidden lg:block">
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-lg">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
