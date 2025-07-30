import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Shield, Phone, Leaf, Snowflake } from 'lucide-react';
import ImageOptimized from '../components/ImageOptimized';

const Home = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Professional Lawn Care',
      description: 'Complete lawn maintenance including mowing, edging, fertilization, and seasonal cleanup services.',
      features: ['Weekly/Bi-weekly mowing', 'Fertilization programs', 'Weed control', 'Seasonal cleanup']
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: 'Snow Removal Services',
      description: 'Reliable snow and ice removal for residential and commercial properties with 24/7 emergency service.',
      features: ['24/7 emergency service', 'Residential & commercial', 'Ice management', 'Contract options available']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Stanley, ND',
      rating: 5,
      text: 'Batteiger has been taking care of our lawn for 3 years now. Always reliable, professional, and our yard has never looked better!'
    },
    {
      name: 'Mike Peterson',
      location: 'Tioga, ND',
      rating: 5,
      text: 'Their snow removal service is outstanding. They always clear our driveway before we even wake up. Highly recommend!'
    },
    {
      name: 'Jennifer Martinez',
      location: 'New Town, ND',
      rating: 5,
      text: 'Professional, affordable, and dependable. John and his team go above and beyond every time.'
    }
  ];

  const stats = [
    { number: '3500+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '12+', label: 'Service Areas' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Property,
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Perfectly Maintained</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional lawn care and snow removal services that keep your property beautiful and accessible year-round. 
                Trusted by 3500+ customers across North Dakota.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a
                  href="tel:+14062089025"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (406) 208-9025
                </a>
              </div>
            </div>
            <div className="relative">
              <ImageOptimized
                src="https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg"
                alt="Beautiful maintained lawn"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                priority={true}
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">5.0</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">3500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Property Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pristine summer lawns to clear winter driveways, we provide comprehensive 
              property maintenance services that protect your investment year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
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
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Batteiger for Your Property Care?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're not just another lawn care company. We're your neighbors, committed to 
                making our community more beautiful, one property at a time.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Local Family Business</h3>
                    <p className="text-gray-600">
                      Started as a family effort to teach our kids the value of hard work. 
                      Now we're proud to serve our entire community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      5+ years of experience with 3500+ satisfied customers. 
                      Our reputation speaks for itself.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Licensed & Insured</h3>
                    <p className="text-gray-600">
                      Complete peace of mind with full licensing and insurance coverage 
                      for all our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageOptimized
                src="/batteigerfam.png"
                alt="Batteiger family team"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. Here's what our neighbors have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{testimonial.rating}.0</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Proudly Serving Your Community
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide professional property care services throughout the greater metro area.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              'Tioga', 'Stanley', 'New Town', 'Wildrose', 'Bowbells', 'Crosby',
              'Hanks', 'Lostwood', 'Lunds Valley', 'Appam', 'Wassaic', 'Columbus'
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 font-medium border border-red-100"
              >
                {area}
              </div>
            ))}
          </div>

          <p className="text-gray-600">
            Don't see your area listed? <Link to="/contact" className="text-red-600 font-medium hover:text-red-700">Contact us</Link> - we're always expanding our service area!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust Batteiger for their property care needs. 
            Get your free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="tel:+14062089025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;