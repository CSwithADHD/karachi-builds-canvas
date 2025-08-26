import React from 'react';
import heroImage from '@/assets/phive-hero-athlete.jpg';

const PhiveHero = () => {
  return (
    <div className="relative h-screen w-full bg-phive-yellow overflow-hidden">
      {/* Background Text Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 text-phive-black font-black text-[12rem] lg:text-[16rem] leading-none opacity-30 select-none">
          <div className="space-y-2">
            <div>PHIVE</div>
            <div>PHIVE</div>
            <div>PHIVE</div>
          </div>
          <div className="space-y-2">
            <div>PORTO</div>
            <div>PORTO</div>
            <div>PORTO</div>
          </div>
        </div>
      </div>

      {/* IT'S OPEN Badge */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-phive-black text-phive-yellow px-4 py-2 rounded-full font-bold text-sm tracking-wider">
          IT'S OPEN!
        </div>
      </div>

      {/* Main Hero Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-full max-w-4xl">
          <img 
            src={heroImage}
            alt="Athlete jumping on bridge"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-phive-black px-8 py-4 rounded-lg">
          <div className="text-phive-yellow font-black text-4xl tracking-wider">
            PHIVE
          </div>
        </div>
      </div>

      {/* Audio Wave Icon (bottom right corner like in original) */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex items-center space-x-1">
          <div className="w-1 h-8 bg-phive-black animate-pulse"></div>
          <div className="w-1 h-12 bg-phive-black animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1 h-6 bg-phive-black animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-10 bg-phive-black animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PhiveHero;