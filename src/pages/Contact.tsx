import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    serviceType: '',
    propertySize: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmit();
  };

  const handleFormSubmit = async () => {
    try {
      const { error } = await supabase
        .from('website_quote_form_responses')
        .insert([{
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          property_type: formData.propertyType,
          service_needed: formData.serviceType,
          property_size: formData.propertySize,
          preferred_contact_method: formData.preferredContact,
          additional_details: formData.message
        }]);

      if (error) {
        console.error('Error submitting form:', error);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['(406) 208-9025', 'Available 24/7 for emergencies'],
      action: 'tel:+14062089025'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['batteigerlawnservice@gmail.com', 'Response within 24 hours'],
      action: 'mailto:batteigerlawnservice@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Service Area',
      details: ['Stanley, Tioga & Newtown Area', '25+ surrounding communities'],
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon-Fri: 8AM-5PM', 'Sat-Sun: Emergency only'],
      action: null
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="top" className="relative py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Property Assessment</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your property? Get a personalized quote and discover how we can 
            make your outdoor space the envy of the neighborhood.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Request Your Free Quote
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your request and will contact you within 24 hours with your personalized quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                        placeholder="john@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Property Type</option>
                        <option value="residential">Residential Home</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="condo">Condo/Townhome</option>
                        <option value="apartment">Apartment Complex</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Service</option>
                        <option value="lawn-care">Lawn Care</option>
                        <option value="snow-removal">Snow Removal</option>
                        <option value="both">Lawn Care & Snow Removal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="propertySize" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Size
                    </label>
                    <select
                      id="propertySize"
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Property Size</option>
                      <option value="small">Small (up to 4,000 sq ft)</option>
                      <option value="medium">Medium (4,000-7,500 Sq Ft)</option>
                      <option value="large">Large (7,500-10,000 Sq ft)</option>
                      <option value="extra-large">X Large (10,000 sq ft +)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        />
                        <span className="ml-2 text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        />
                        <span className="ml-2 text-gray-700">Phone</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your specific needs, current challenges, or any special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group"
                  >
                    Get My Free Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Get in Touch Today
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to get started? Contact us today for your free property assessment. 
                We'll provide a detailed quote and answer any questions about our services.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`text-gray-600 ${idx === 0 && info.action ? 'text-red-600 hover:text-red-700' : ''}`}>
                          {info.action && idx === 0 ? (
                            <a href={info.action} className="font-medium">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-red-50 to-white rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  Need emergency snow removal or urgent property care? We're available 24/7 
                  for emergency situations.
                </p>
                <a
                  href="tel:+14062089025"
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center group"
                >
                  Call Emergency Line
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We Serve Your Community
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Proudly serving residential and commercial properties throughout the greater metro area.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Tioga', 'Stanley', 'New Town', 'Wildrose', 'Bowbells', 'Crosby',
              'Hanks', 'Lostwood', 'Lunds Valley', 'Appam', 'Wassaic', 'Columbus'
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 font-medium"
              >
                {area}
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-8">
            Don't see your area listed? <span className="text-red-600 font-medium">Contact us</span> - we're always expanding our service area!
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;