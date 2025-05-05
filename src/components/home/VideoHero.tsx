
import React from 'react';
import { Link } from 'react-router-dom';

const VideoHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source 
          src="https://player.vimeo.com/external/370331493.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=172&oauth2_token_id=57447761" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          <span className="block">BUILDING THE FUTURE</span>
          <span className="text-construction-red">OF KARACHI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Excellence in Construction, Quality in Delivery
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link 
            to="/projects" 
            className="bg-construction-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
          >
            View Our Projects
          </Link>
          <Link
            to="/contact" 
            className="bg-transparent hover:bg-white hover:text-construction-black text-white font-bold py-3 px-8 border-2 border-white rounded-md transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <span className="mb-2">Scroll Down</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default VideoHero;
