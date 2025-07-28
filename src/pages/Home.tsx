import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Lawn Care',
      description: 'Professional mowing, trimming, and maintenance to keep your lawn pristine year-round.',
      image: 'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg',
      features: ['Seasonal Packages For Weekly Mowing', 'One-Time Cuts', 'Weed Control', 'Fertilization', 'Dethatching, Aeration, Overseeding', 'Leaf Cleanup']
    },
    {
      title: 'Snow Removal',
      description: 'Reliable snow and ice removal services to keep your property safe and accessible.',
      image: '/garage-driveaway-covered-in-snow.jpg',
      features: ['Seasonal Residential Snow Removal', 'Driveway & Sidewalk Clearing', 'Salting, Deicing', 'Commercial Plowing']
    }
  ];

  const testimonials = [
    {
      name: 'Memory Fireworks',
      date: 'Jun 20, 2025',
      content: 'Great work.',
      rating: 5,
      halfStar: false
    },
    {
      name: 'Danny Linberg',
      date: 'May 27, 2025',
      content: 'Appreciate you very much',
      rating: 5,
      halfStar: false
    },
    {
      name: 'Dawn Nelson',
      date: 'May 13, 2025',
      content: 'Outstanding service. Mowed, trimmed and edged. My lawn already looks better.',
      rating: 5,
      halfStar: false
    },
    {
      name: 'Julie Erie',
      date: 'May 09, 2025',
      content: 'Thank you for always doing a great job.',
      rating: 4,
      halfStar: true
    },
    {
      name: 'Judy Vedaa',
      date: 'Apr 17, 2025',
      content: 'Great job!',
      rating: 5,
      halfStar: false
    },
    {
      name: 'Susie Olson',
      date: 'Apr 14, 2025',
      content: 'Wonderful work… would refer to anyone!!! Thanks for the good job done, you guys!!!',
      rating: 5,
      halfStar: false
    },
    {
      name: 'Kylee DeBock',
      date: 'Feb 04, 2025',
      content: 'We no longer live in Oklahoma. Please take us off your list.',
      rating: 4,
      halfStar: false
    },
    {
      name: 'Damon Williams',
      date: 'Dec 21, 2024',
      content: 'Awesome work',
      rating: 5,
      halfStar: false
    },
    {
      name: 'Penny Fairhart',
      date: 'Nov 27, 2024',
      content: 'John is awesome and has handled every task with professionalism and attention to detail. I am grateful for his experience and therefore his recommendations regarding various tasks. Thank you, John for your integrity and work ethic. We\'re fortunate to have you on our team!',
      rating: 5,
      halfStar: false
    },
    {
      name: 'Susan Hodge',
      date: 'Nov 17, 2024',
      content: 'Very efficient, great communication. Well worth the money!',
      rating: 4,
      halfStar: true
    },
    {
      name: 'Nd Truck Wash',
      date: 'Nov 17, 2024',
      content: 'Always there',
      rating: 5,
      halfStar: false
    },
    {
      name: 'Alicia Parsons',
      date: 'Nov 17, 2024',
      content: 'Absolutely adore the crew! They were out here at 10:30 pm making sure I was cleared! Thank you so much for all that you do!',
      rating: 5,
      halfStar: false
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Property's
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Best Friend</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional lawn care and snow removal services that keep your property beautiful and safe year-round. 
                Trusted by over 3500+ satisfied customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a
                  href="tel:+14062089025"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  Call Now
                </a>
              </div>
              <div className="flex items-center space-x-8 mt-8">
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-red-600" />
                  <span className="text-gray-600">3500+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-red-600" />
                  <span className="text-gray-600">5+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.8567375693638!2d-102.28579932351337!3d48.344058936763695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5320a3a83ec6660d%3A0xa31a8a7e77811f54!2sBatteiger%20Lawn%20Service.%20Snow%20Removal%20%26%20Weed%20Control!5e0!3m2!1sfr!2sca!4v1753663635580!5m2!1sfr!2sca" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-auto"></iframe>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Property Care Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pristine lawns in summer to clear driveways in winter, we've got your property covered year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 0 ? (
                    <a
                      href="/services#lawn-care-services"
                      className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center group"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  ) : (
                    <a
                      href="/services#snow-removal-services"
                      className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center group"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Property Owners Choose Batteiger
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just maintain properties – we transform them into spaces you'll love coming home to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Always On Time</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable service you can count on. We show up when we say we will, every single time.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">5+ Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Decades of experience caring for properties just like yours. We know what works.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3500+ Happy Customers</h3>
              <p className="text-gray-600 leading-relaxed">
                Join hundreds of satisfied customers who trust us with their most valuable asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it — hear from real customers about their experience with us.
            </p>
          </div>

          {/* All Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  {testimonial.halfStar && (
                    <div className="relative">
                      <Star className="w-5 h-5 text-gray-300" />
                      <div className="absolute inset-0 overflow-hidden w-1/2">
                        <Star className="w-5 h-5 fill-current text-yellow-400" />
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Footer */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8" />
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">5.0</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(13)</span>
                </div>
              </div>
              <a
                href="https://www.google.com/search?sca_esv=e6a856e083a4051b&rlz=1C5CHFA_enCA1165CA1167&sxsrf=AE3TifP1CznZIaK2U9YtKbqEmVEZ6V4fzQ:1753633128793&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0dX6aSKVVGe1vAssDtCht5Ax0zPBlsk_qt9Cemz0GBd6c9tuIdwpF4kpo0GRWnPG0yfrj0wn3VdZZKFuBW-hkIOp9ek87JWbMHfVNNCeg22DmLEr3ruLtu7XXRzShqZg5cifpCzx5k8vXeyl0aHXML3LQAM&q=Batteiger+Lawn+Service.+Snow+Removal+%26+Weed+Control+Avis&sa=X&ved=2ahUKEwiq7tS9uN2OAxXqv4kEHQXnIFEQ0bkNegQIHxAE&biw=1470&bih=831&dpr=2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
              >
                Write a review
              </a>
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
            Join thousands of satisfied customers and experience the Batteiger difference. 
            Get your free quote today and see why we're the #1 choice for property care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Get Your Free Quote
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

export default Home;