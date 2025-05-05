
import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-construction-black text-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        {/* Address */}
        <div className="flex">
          <div className="bg-construction-red p-3 rounded-lg mr-4">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-bold mb-1">Our Location</h4>
            <p>123 Construction Avenue, DHA Phase 8,<br />Karachi, Pakistan</p>
          </div>
        </div>
        
        {/* Phone */}
        <div className="flex">
          <div className="bg-construction-red p-3 rounded-lg mr-4">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="font-bold mb-1">Call Us</h4>
            <p>+92 321 1234567</p>
            <p>+92 321 7654321</p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex">
          <div className="bg-construction-red p-3 rounded-lg mr-4">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="font-bold mb-1">Email Us</h4>
            <p>info@buildmasters.pk</p>
            <p>careers@buildmasters.pk</p>
          </div>
        </div>
        
        {/* LinkedIn */}
        <div className="flex">
          <div className="bg-construction-red p-3 rounded-lg mr-4">
            <Linkedin size={24} />
          </div>
          <div>
            <h4 className="font-bold mb-1">Connect With Us</h4>
            <p>linkedin.com/company/buildmasters</p>
          </div>
        </div>
      </div>
      
      {/* Working Hours */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <h4 className="font-bold mb-3">Working Hours</h4>
        <div className="grid grid-cols-2 gap-2">
          <div>Monday - Friday:</div>
          <div>9:00 AM - 6:00 PM</div>
          <div>Saturday:</div>
          <div>9:00 AM - 3:00 PM</div>
          <div>Sunday:</div>
          <div>Closed</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
