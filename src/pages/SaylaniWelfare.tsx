import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, GraduationCap, Stethoscope, Home, Utensils, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const SaylaniWelfare = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="bg-green-700 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Heart className="text-green-700" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">SAYLANI WELFARE</h1>
              <p className="text-sm opacity-90">International Trust</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-green-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-green-200 transition-colors">About</a>
            <a href="#services" className="hover:text-green-200 transition-colors">Services</a>
            <a href="#donate" className="hover:text-green-200 transition-colors">Donate</a>
            <a href="#contact" className="hover:text-green-200 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            SERVING HUMANITY
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Pakistan's Largest NGO - Breaking the cycle of poverty and spreading happiness since 1999
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              DONATE NOW
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              VOLUNTEER WITH US
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-700 mb-2">24+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-700 mb-2">63+</div>
              <div className="text-gray-600">Areas of Work</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-700 mb-2">50K+</div>
              <div className="text-gray-600">Daily Meals</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-700 mb-2">1M+</div>
              <div className="text-gray-600">Lives Touched</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">ABOUT SAYLANI WELFARE</h3>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in May 1999 by famous spiritual and religious scholar Maulana Bashir Ahmed Farooqui, 
              Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, 
              alleviating the financial troubles of the poor, giving people a chance to live a dignified life and 
              spreading happiness.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are an organization that believes in lighting up the lives of underprivileged people across the world. 
              We endeavor to provide the best quality amenities to the less fortunate people, enabling them to live 
              a life of dignity and honor.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">OUR SERVICES</h3>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Saylani Welfare works in 63+ areas of human welfare, providing comprehensive support to those in need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 mb-4">
                <Utensils size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">DASTARKHWAN</h4>
              <p className="text-gray-600">Free daily meals served to thousands of people across Pakistan. No one sleeps hungry.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 mb-4">
                <GraduationCap size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">EDUCATION</h4>
              <p className="text-gray-600">Free quality education including IT courses, vocational training, and academic programs.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 mb-4">
                <Stethoscope size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">HEALTHCARE</h4>
              <p className="text-gray-600">Free medical services, ambulance, and healthcare facilities for the underprivileged.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 mb-4">
                <Home size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">HOUSING</h4>
              <p className="text-gray-600">Providing shelter and housing solutions for homeless and displaced families.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 mb-4">
                <Users size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">EMPLOYMENT</h4>
              <p className="text-gray-600">Job placement and skill development programs to make people self-sufficient.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 mb-4">
                <Heart size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">WELFARE</h4>
              <p className="text-gray-600">Emergency relief, disaster management, and comprehensive welfare services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8">MAKE A DIFFERENCE TODAY</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your donation can change lives. Join us in our mission to serve humanity and spread happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              DONATE FOOD
            </button>
            <button className="bg-white hover:bg-gray-100 text-green-700 font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              ZAKAT FUND
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              SADAQAH
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">GET IN TOUCH</h3>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">CALL US</h4>
              <p className="text-gray-600">+92 21 111 729 526</p>
              <p className="text-gray-600">+92 21 34134349</p>
            </div>

            <div className="text-center">
              <div className="bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">EMAIL US</h4>
              <p className="text-gray-600">info@saylaniwelfare.com</p>
              <p className="text-gray-600">contact@saylaniwelfare.com</p>
            </div>

            <div className="text-center">
              <div className="bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">VISIT US</h4>
              <p className="text-gray-600">A-25, Bahadurabad</p>
              <p className="text-gray-600">Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <div>
                  <h5 className="font-bold">SAYLANI WELFARE</h5>
                  <p className="text-sm opacity-80">International Trust</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Serving humanity since 1999. Pakistan's largest NGO dedicated to breaking the cycle of poverty.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">QUICK LINKS</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#donate" className="text-gray-400 hover:text-white transition-colors">Donate</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">SERVICES</h5>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Dastarkhwan</li>
                <li className="text-gray-400">Education</li>
                <li className="text-gray-400">Healthcare</li>
                <li className="text-gray-400">Housing</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">FOLLOW US</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Saylani Welfare International Trust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaylaniWelfare;