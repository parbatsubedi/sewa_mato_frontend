'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'plumbing', name: 'Plumbing', icon: '/icons/plumbing.png' },
    { id: 'electrical', name: 'Electrical', icon: '/icons/electrical.png' },
    { id: 'cleaning', name: 'Cleaning', icon: '/icons/cleaning.png' },
    { id: 'tutoring', name: 'Tutoring', icon: '/icons/tutoring.png' },
    { id: 'painting', name: 'Painting', icon: '/icons/painting.png' },
    { id: 'carpentry', name: 'Carpentry', icon: '/icons/carpentry.png' },
  ];

  const featuredProviders = [
    {
      id: 1,
      name: 'Ram Thapa',
      service: 'Plumbing',
      rating: 4.8,
      image: '/api/placeholder/80/80',
      reviews: 126,
      price: '850/hour',
    },
    {
      id: 2,
      name: 'Sita Sharma',
      service: 'Cleaning',
      rating: 4.9,
      image: '/api/placeholder/80/80',
      reviews: 98,
      price: '700/hour',
    },
    {
      id: 3,
      name: 'Bijay Gurung',
      service: 'Electrical',
      rating: 4.7,
      image: '/api/placeholder/80/80',
      reviews: 85,
      price: '950/hour',
    },
    {
      id: 4,
      name: 'Asha Magar',
      service: 'Tutoring',
      rating: 4.9,
      image: '/api/placeholder/80/80',
      reviews: 112,
      price: '1200/hour',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Manish Shrestha',
      text: 'Finding reliable plumbers used to be such a hassle. SewaMato connected me with a professional who fixed my issues within hours. The verification system gives me peace of mind!',
      location: 'Kathmandu',
      image: '/api/placeholder/64/64',
    },
    {
      id: 2,
      name: 'Sunita Basnet',
      text: 'As a working mother, I needed a reliable tutor for my children. SewaMato helped me find qualified teachers with background checks and reviews from other parents. Excellent service!',
      location: 'Pokhara',
      image: '/api/placeholder/64/64',
    },
    {
      id: 3,
      name: 'Bikash Tamang',
      text: 'I use SewaMato to find clients for my electrical services. The platform has helped me grow my small business and maintain a steady income. The payment system is secure and reliable.',
      location: 'Lalitpur',
      image: '/api/placeholder/64/64',
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Connect with Trusted Local Service Providers in Nepal
              </h1>
              <p className="text-xl mb-8">
                Find verified plumbers, electricians, tutors, cleaners and more in your area with just a few clicks
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Book a Service
                </Link>
                <Link href="/join-as-provider" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-blue-800 transition-colors">
                  Become a Provider
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/api/placeholder/500/400"
                alt="SewaMato - Connect with local service providers"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Category Section */}
      <section className="py-10 bg-white shadow-md -mt-6 rounded-t-3xl relative z-10 max-w-6xl mx-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-center w-full">
              <div className="relative flex items-center w-full max-w-3xl">
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <button className="absolute right-0 h-full px-6 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center mb-8">Popular Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    selectedCategory === category.id ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={30}
                      height={30}
                      className="w-6 h-6"
                      // If icon not found, use a placeholder
                      // onError={(e) => {
                      //   e.target.onerror = null;
                      //   e.target.src = '/api/placeholder/24/24';
                      // }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How SewaMato Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Search for a Service</h3>
              <p className="text-gray-600">Browse through our verified service providers or search for specific services in your area.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Book an Appointment</h3>
              <p className="text-gray-600">Select your preferred time slot and provide service details. Pay securely with eSewa or Khalti.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get the Service Done</h3>
              <p className="text-gray-600">Our professional will arrive at your location. Rate and review their service after completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Top-Rated Service Providers</h2>
            <Link href="/providers" className="text-blue-600 hover:text-blue-800 font-medium">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProviders.map((provider) => (
              <div key={provider.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="flex items-center mb-4">
                    <Image
                      src={provider.image}
                      alt={provider.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{provider.name}</h3>
                      <p className="text-gray-600">{provider.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-700">{provider.rating}</span>
                    <span className="text-gray-400 ml-1">({provider.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">रू {provider.price}</span>
                    <Link
                      href={`/providers/${provider.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Our Payment Partners</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We've partnered with Nepal's leading payment platforms to ensure secure and convenient transactions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image 
                src="/api/placeholder/120/60" 
                alt="eSewa" 
                width={120} 
                height={60} 
                className="h-12 w-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image 
                src="/api/placeholder/120/60" 
                alt="Khalti" 
                width={120} 
                height={60} 
                className="h-12 w-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image 
                src="/api/placeholder/120/60" 
                alt="ConnectIPS" 
                width={120} 
                height={60} 
                className="h-12 w-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image 
                src="/api/placeholder/120/60" 
                alt="IME Pay" 
                width={120} 
                height={60} 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of Nepali customers who are using SewaMato to find reliable local services
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/services"
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Book a Service Now
            </Link>
            <Link
              href="/join-as-provider"
              className="px-8 py-4 bg-white border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              Become a Service Provider
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;