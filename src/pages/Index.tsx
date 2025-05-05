
import React from 'react';
import { Link } from 'react-router-dom';
import VideoHero from '@/components/home/VideoHero';
import Services from '@/components/home/Services';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <VideoHero />
        <Services />
        <FeaturedProjects />
        
        {/* Company Stats Section */}
        <section className="py-16 bg-construction-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-construction-red mb-2">25+</div>
                <div className="text-lg">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-construction-red mb-2">100+</div>
                <div className="text-lg">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-construction-red mb-2">250+</div>
                <div className="text-lg">Professional Staff</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-construction-red mb-2">15+</div>
                <div className="text-lg">Industry Awards</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-construction-lightgray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our expert team today for a consultation and let's build something amazing together.
            </p>
            <Link
              to="/contact" 
              className="bg-construction-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
