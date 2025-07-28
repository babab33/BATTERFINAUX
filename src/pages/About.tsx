import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Heart, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion for Excellence',
      description: 'We take genuine pride in every lawn we maintain and every driveway we clear.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability You Can Trust',
      description: 'Rain or shine, we deliver consistent, dependable service you can count on.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer-First Approach',
      description: 'Your satisfaction isn\'t just our goal – it\'s our commitment to you.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Professional Standards',
      description: 'Licensed, insured, and equipped with the best tools for exceptional results.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Caring for Properties,
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Building Relationships</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over 5 years, Batteiger has been the trusted partner for homeowners and businesses 
                who demand excellence in property care. We're not just a service provider – we're your 
                neighbors, committed to making our community more beautiful.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div>
              <img
                src="/batteigerfam.png"
                alt="Batteiger family team"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Batteiger Lawn & Snow Services started in 2020 as a simple way for our kids to learn the value of hard work, earn a few dollars, and serve our local community. What began as a small family effort has since grown into a full-time business — one that allowed me, John Batteiger, to leave my regular job and fully commit to this journey.
              </p>
              <p className="mb-6">
                It all started with a push mower, a few shovels, and a commitment to do right by our neighbors. Thanks to the people who gave us a chance, this has turned into something much bigger than we imagined. We built this company on values like honesty, loyalty, and dependability — and that's still what drives us every single day.
              </p>
              <p>
                Today, Batteiger Lawn & Snow Services proudly serves dozens of homes and businesses across the area. With every driveway we clear and every lawn we cut, we're grateful for the trust our community has placed in us — and we don't take that for granted.
              </p>
              <div className="text-center mt-8">
                <p className="text-gray-600 italic">-John Batteiger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your property's success.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                  alt="John Batteiger"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Batteiger</h3>
              <p className="text-red-600 font-medium mb-4">Owner/Operation</p>
              <p className="text-gray-600 leading-relaxed">
                John leads every job with integrity and care, making sure every customer feels valued and well taken care of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Batteiger Difference?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join our family of satisfied customers and discover why we're the trusted choice 
            for property care in our community.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center group"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;