
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import Map from '@/components/contact/Map';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Contact Header */}
        <section className="bg-construction-black py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with our team for inquiries, quotes, or to discuss your next construction project.
            </p>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4">
            <Map />
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-construction-lightgray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-construction-red mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <FaqItem 
                  question="What areas of Karachi do you serve?"
                  answer="We serve all areas of Karachi including DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, Bahria Town, and surrounding regions. We also undertake projects throughout Sindh province."
                />
                <FaqItem 
                  question="How do I request a project quote?"
                  answer="You can request a quote by filling out our contact form, calling our office, or sending us an email. Our team will get back to you within 24-48 hours to discuss your project requirements."
                />
                <FaqItem 
                  question="What types of projects do you handle?"
                  answer="We handle a wide range of projects including commercial buildings, residential complexes, infrastructure development, renovations, and industrial facilities."
                />
                <FaqItem 
                  question="How long does a typical construction project take?"
                  answer="Project timelines vary based on scope, complexity, and scale. Small renovations may take a few weeks, while large commercial projects can take 12-24 months. We provide detailed timelines during the consultation phase."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// FAQ Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-gray-200 pb-4">
      <button 
        className="flex justify-between items-center w-full text-left font-bold py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-construction-red text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`mt-2 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Contact;
