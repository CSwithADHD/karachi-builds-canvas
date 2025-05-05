
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const portfolioItems = {
    'commercial': [
      { id: 1, title: 'Business Center Tower', description: 'Modern commercial center in downtown Karachi', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
      { id: 2, title: 'Corporate Headquarters', description: 'Multi-story office building with sustainable design', image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
      { id: 3, title: 'Shopping Complex', description: 'Retail and entertainment center in Clifton', image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    ],
    'residential': [
      { id: 4, title: 'Luxury Villas', description: 'High-end residential community in DHA', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
      { id: 5, title: 'Apartment Complex', description: 'Modern urban living spaces with amenities', image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    ],
    'infrastructure': [
      { id: 6, title: 'Highway Extension', description: 'Major transportation infrastructure project', image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
      { id: 7, title: 'Public Library', description: 'Cultural center and educational facility', image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    ],
  };
  
  // Image lightbox handler
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Portfolio Header */}
        <section className="bg-construction-black py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our showcase of excellence in construction across various sectors.
            </p>
          </div>
        </section>
        
        {/* Portfolio Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="commercial" className="w-full">
              <TabsList className="w-full flex justify-center mb-12">
                <TabsTrigger value="commercial" className="px-8 py-3">Commercial</TabsTrigger>
                <TabsTrigger value="residential" className="px-8 py-3">Residential</TabsTrigger>
                <TabsTrigger value="infrastructure" className="px-8 py-3">Infrastructure</TabsTrigger>
              </TabsList>
              
              {Object.keys(portfolioItems).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems[category].map((item) => (
                      <div 
                        key={item.id}
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox(item)}
                      >
                        <div className="h-64 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-auto"
                />
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                  onClick={closeLightbox}
                >
                  <X size={24} className="text-construction-black" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Stats Section */}
        <section className="py-16 bg-construction-lightgray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
              <div className="w-20 h-1 bg-construction-red mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-construction-red mb-2">25+</div>
                <div>Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-construction-red mb-2">500K+</div>
                <div>Square Feet Built</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-construction-red mb-2">15+</div>
                <div>Industry Awards</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-construction-red mb-2">100%</div>
                <div>Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Import the necessary icon
const X = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default Portfolio;
