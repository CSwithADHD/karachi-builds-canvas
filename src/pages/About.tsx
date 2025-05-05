
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Mission from '@/components/about/Mission';
import Vision from '@/components/about/Vision';

const About = () => {
  const teamMembers = [
    {
      name: 'Ahmed Khan',
      position: 'Chief Executive Officer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Sara Ahmed',
      position: 'Chief Operations Officer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Imran Malik',
      position: 'Project Director',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      name: 'Fatima Hassan',
      position: 'Chief Architect',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* About Header */}
        <section className="bg-construction-black py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Building excellence in Karachi since 1998. Learn about our journey, mission, and values.
            </p>
          </div>
        </section>
        
        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt="Company history"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                <div className="w-20 h-1 bg-construction-red mb-6"></div>
                
                <p className="text-lg mb-6 leading-relaxed">
                  Founded in 1998, BuildMasters Construction Company began as a small team of dedicated professionals 
                  with a vision to transform Karachi's skyline. What started as a modest operation has grown into one 
                  of Pakistan's most respected construction companies.
                </p>
                
                <p className="text-lg mb-6 leading-relaxed">
                  Over the past 25 years, we have successfully completed hundreds of projects across residential, 
                  commercial, and infrastructure sectors, earning a reputation for excellence, reliability, and innovation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Today, our team of over 250 professionals continues to push the boundaries of construction, 
                  embracing new technologies and sustainable practices to build a better tomorrow for Karachi 
                  and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <Mission />
        <Vision />
        
        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <div className="w-20 h-1 bg-construction-red mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experts who lead our company with passion, innovation, and decades of industry experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-construction-red">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-construction-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're always looking for talented professionals to join our growing team. 
              Explore career opportunities with BuildMasters.
            </p>
            <a 
              href="/contact" 
              className="bg-construction-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              View Careers
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
