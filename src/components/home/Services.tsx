
import React from 'react';
import { Building, Construction, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building size={48} />,
      title: 'Commercial Construction',
      description: 'We deliver high-quality commercial buildings, from corporate offices to retail spaces, with precision and excellence.'
    },
    {
      icon: <Construction size={48} />,
      title: 'Residential Projects',
      description: 'Building dream homes with attention to detail, quality materials, and innovative designs for modern living.'
    },
    {
      icon: <Image size={48} />,
      title: 'Infrastructure Development',
      description: 'Creating reliable infrastructure that stands the test of time, from roads to bridges and public facilities.'
    },
  ];

  return (
    <section className="py-20 bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <div className="w-20 h-1 bg-construction-red mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive construction services with a focus on quality, 
            safety, and client satisfaction across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-construction-red mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
