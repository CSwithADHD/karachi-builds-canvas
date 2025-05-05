
import React from 'react';

const Vision = () => {
  return (
    <section className="py-20 bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
                alt="Future construction"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-10 -right-10 bg-construction-black p-8 rounded-lg shadow-lg text-white text-center hidden lg:block">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg">Projects Completed</div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
            <div className="w-20 h-1 bg-construction-red mb-6"></div>
            <p className="text-lg mb-6 leading-relaxed">
              To be the leading construction company in Pakistan, recognized for our commitment to excellence, 
              innovative building solutions, and transformative impact on urban development.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We aspire to create structures that not only meet the functional needs of today but also 
              inspire future generations, contributing positively to the communities we serve.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Strategic Goals</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold">Sustainable Development</h4>
                  <p>Implementing eco-friendly practices and materials in all projects</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold">Technological Innovation</h4>
                  <p>Adopting cutting-edge construction technologies and methodologies</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold">Community Impact</h4>
                  <p>Creating structures that enhance quality of life and economic growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
