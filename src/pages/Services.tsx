import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Snowflake, Truck, Clock, Users } from 'lucide-react';

const Services = () => {
  const lawnServices = [
    {
      title: 'Seasonal Lawn Mowing',
      description: 'Professional mowing services that keep your grass at the perfect height for health and beauty.',
      features: ['Edge trimming included', 'Lawn edging included', 'Grass clipping cleanup', 'Season-long consistency'],
      price: 'Starting at $65/visit'
    },
    {
      title: 'Fertilization Program',
      description: 'Comprehensive lawn nutrition program to keep your grass thick, green, and healthy.',
      features: ['4 applications/year', 'Weed control and fertilization, including pre-emergent', 'Ground sterilizer and roundup application options available', 'Mosquito and bug control options available'],
      price: 'Starting at $95/application'
    },
    {
      title: 'Seasonal Services',
      description: 'Spring and fall cleanup services to prepare your landscape for the changing seasons.',
      features: ['Leaf removal and disposal', 'Hedge, tree and bush trimming', 'Dethatching, aeration and overseeding', 'Debris removal'],
      price: 'Custom rates'
    }
  ];

  const snowServices = [
    {
      title: '24/7 Residential Snow Removal',
      description: 'Emergency snow removal services to keep your property accessible during winter storms.',
      features: ['Emergency response available', 'Driveway and walkway clearing', 'Priority customer service'],
      price: 'Starting at $65/visit'
    },
    {
      title: 'Ice Management',
      description: 'Professional ice control and prevention services for safe winter conditions.',
      features: ['Pre-treatment applications', 'Rock salt and eco-friendly options', 'Slip and fall prevention', 'Regular monitoring'],
      price: 'Starting at $45/application'
    },
    {
      title: 'Residential Contracts',
      description: 'Comprehensive winter care contracts for worry-free snow season coverage.',
      features: ['Unlimited snow removal', 'Priority service guarantee'],
      price: 'Custom rates'
    },
    {
      title: 'Commercial Snow Services',
      description: 'Large-scale snow removal for businesses, shopping centers, and commercial properties.',
      features: ['Fleet of commercial equipment', 'Licensed and insured', '24/7 availability', 'Service level agreements'],
      price: 'Custom commercial pricing'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="top" className="relative py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Property Care
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From pristine summer lawns to clear winter driveways, we provide comprehensive property care 
            services that keep your investment looking its best year-round.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* Lawn Care Services */}
      <section id="lawn-care-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lawn Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional lawn care services that transform your outdoor space into a beautiful, 
              healthy landscape you'll be proud to call home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {lawnServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col p-6 lg:p-8 min-h-[400px]"
              >
                {/* Header section - fixed at top */}
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>
                
                {/* Features list - takes up remaining space */}
                <ul className="space-y-2 flex-grow mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm lg:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Bottom section - anchored to bottom with proper spacing */}
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-red-100">
                  {/* Price positioned at bottom-left */}
                  <span className="font-semibold text-red-600 whitespace-nowrap text-base lg:text-lg self-end">
                    {service.price}
                  </span>
                  {/* Get Quote button positioned at bottom-right */}
                  <Link
                    to="/contact"
                    className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center group whitespace-nowrap text-base lg:text-lg self-end ml-4"
                  >
                    Get Quote
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snow Removal Services */}
      <section id="snow-removal-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Snowflake className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Snow Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable snow and ice removal services that keep your property safe, accessible, 
              and liability-free throughout the winter months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {snowServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 flex flex-col p-6 lg:p-8 min-h-[400px]"
              >
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>
                
                {/* Features list - takes up remaining space */}
                <ul className="space-y-2 flex-grow mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm lg:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Bottom section - anchored to bottom with proper spacing */}
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-red-100">
                  {/* Price positioned at bottom-left */}
                  <span className="font-semibold text-red-600 whitespace-nowrap text-base lg:text-lg self-end">
                    {service.price}
                  </span>
                  {/* Get Quote button positioned at bottom-right */}
                  <Link
                    to="/contact"
                    className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center group whitespace-nowrap text-base lg:text-lg self-end ml-4"
                  >
                    Get Quote
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional service features that set us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Equipment</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art equipment maintained to the highest standards for reliable, efficient service.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Convenient scheduling options that work with your lifestyle and business needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                100% satisfaction guarantee on all services. We're not happy unless you're happy.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Constant Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                We keep you in the loop before we arrive and after the job's done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Get a personalized quote for your property care needs. Our team will assess your requirements 
            and provide a comprehensive service plan tailored to your budget and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="tel:+14062089025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              Call (406) 208-9025
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;