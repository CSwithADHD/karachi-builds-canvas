
import React from 'react';
import AppleM2Clone from '@/components/AppleM2Clone';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AppleM2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <AppleM2Clone />
      </main>
      <Footer />
    </div>
  );
};

export default AppleM2;
