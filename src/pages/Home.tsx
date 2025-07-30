import React from 'react';
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react';
import ImageOptimized from '../components/ImageOptimized';
import LazySection from '../components/LazySection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Lawn Care Services
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Transform your outdoor space with our expert landscaping and maintenance services. 
                Beautiful lawns, reliable service, competitive prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <ImageOptimized
                src="https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg"
                alt="Beautiful landscaped lawn"
                className="rounded-lg shadow-2xl"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <LazySection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From regular maintenance to complete landscape transformations, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lawn Mowing",
                description: "Regular, professional mowing to keep your grass healthy and beautiful.",
                image: "https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg",
                features: ["Weekly/Bi-weekly service", "Edge trimming", "Grass collection"]
              },
              {
                title: "Landscaping",
                description: "Complete landscape design and installation for stunning outdoor spaces.",
                image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg",
                features: ["Custom design", "Plant installation", "Hardscaping"]
              },
              {
                title: "Tree & Shrub Care",
                description: "Professional pruning, trimming, and maintenance for healthy plants.",
                image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg",
                features: ["Pruning & trimming", "Disease treatment", "Seasonal care"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <ImageOptimized
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Why Choose Us */}
      <LazySection className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Batteiger Lawn Services?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "15+ Years Experience",
                    description: "Trusted by homeowners and businesses throughout the region."
                  },
                  {
                    title: "Licensed & Insured",
                    description: "Full coverage and professional certifications for your peace of mind."
                  },
                  {
                    title: "Satisfaction Guaranteed",
                    description: "We stand behind our work with a 100% satisfaction guarantee."
                  },
                  {
                    title: "Competitive Pricing",
                    description: "Quality service at fair, transparent prices with no hidden fees."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImageOptimized
                src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg"
                alt="Professional lawn care team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </LazySection>

      {/* Testimonials */}
      <LazySection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Homeowner",
                rating: 5,
                text: "Batteiger Lawn Services transformed our backyard into a beautiful oasis. Professional, reliable, and reasonably priced!"
              },
              {
                name: "Mike Chen",
                location: "Business Owner",
                rating: 5,
                text: "They maintain our office complex grounds perfectly. Always on time and attention to detail is outstanding."
              },
              {
                name: "Lisa Rodriguez",
                location: "Property Manager",
                rating: 5,
                text: "Best lawn service we've used. Great communication and they go above and beyond every time."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* CTA Section */}
      <LazySection className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Lawn?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Get your free, no-obligation quote today and see why we're the trusted choice for lawn care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center space-x-6 text-green-100">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@batteigerlawn.com</span>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
    </div>
  );
};

export default Home;