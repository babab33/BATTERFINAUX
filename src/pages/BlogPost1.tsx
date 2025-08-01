import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const BlogPost1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>
          
          <div className="mb-8">
            <LazyImage
              src="https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg"
              alt="Spring lawn care"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg gpu-accelerated"
              loading="eager"
            />
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Yasmine .C</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Essential Lawn Care Tips for a Perfect Spring Green-Up
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the secrets to getting your lawn ready for spring with our comprehensive guide to early season lawn care practices.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="prose prose-xl max-w-none">
            
            <p className="text-center text-lg leading-relaxed mb-8 text-gray-700">
              Spring is the perfect time to set your lawn up for success throughout the growing season. After months of winter dormancy, your grass is ready to wake up and thrive with the right care and attention. 
            </p>
            <p className="text-center text-lg leading-relaxed mb-12 text-gray-700">
              <strong>Here's your complete guide to achieving that perfect spring green-up.</strong>
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg shadow-sm max-w-4xl mx-auto">
              <p className="text-green-800 font-semibold text-lg mb-0">
                💡 <strong>Pro Tip:</strong> The key to a beautiful lawn isn't just what you do in spring—it's about timing and consistency throughout the season.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">Start with a Spring Cleanup</h2>
            <p className="text-center text-lg leading-relaxed mb-6 text-gray-700 max-w-4xl mx-auto">
              Before you can begin any lawn care routine, it's <em>essential</em> to clear away winter debris. Remove fallen branches, leaves, and any other materials that may have accumulated over the winter months. 
            </p>
            <p className="text-center text-lg leading-relaxed mb-12 text-gray-700 max-w-4xl mx-auto">
              <strong>Why this matters:</strong> This debris can block sunlight and air circulation, preventing your grass from getting the resources it needs to grow.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">Assess Your Lawn's Condition</h2>
            <p className="text-center text-lg leading-relaxed mb-8 text-gray-700 max-w-4xl mx-auto">
              Take a walk around your property and look for signs of winter damage. <strong>Common issues include:</strong>
            </p>
            <ul className="max-w-3xl mx-auto text-left space-y-3 mb-12">
              <li className="text-lg text-gray-700 leading-relaxed"><strong className="text-gray-900">Brown or dead patches</strong> from snow mold or ice damage</li>
              <li className="text-lg text-gray-700 leading-relaxed"><strong className="text-gray-900">Compacted soil</strong> from heavy snow and foot traffic</li>
              <li className="text-lg text-gray-700 leading-relaxed"><strong className="text-gray-900">Bare spots</strong> where grass didn't survive the winter</li>
              <li className="text-lg text-gray-700 leading-relaxed"><strong className="text-gray-900">Thatch buildup</strong> that needs to be addressed</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-lg shadow-sm max-w-4xl mx-auto">
              <p className="text-blue-800 font-semibold text-lg mb-0">
                📋 <strong>Quick Assessment Checklist:</strong> Walk your property on a dry day when you can clearly see problem areas. Take photos to track your progress throughout the season.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">Soil Testing and Preparation</h2>
            <p className="text-center text-lg leading-relaxed mb-6 text-gray-700 max-w-4xl mx-auto">
              Spring is an ideal time to test your soil's pH and nutrient levels. <strong>Most grasses prefer a slightly acidic to neutral pH (6.0-7.0).</strong>
            </p>
            <p className="text-center text-lg leading-relaxed mb-12 text-gray-700 max-w-4xl mx-auto">
              <em>Important:</em> If your soil is too acidic or alkaline, your grass won't be able to absorb nutrients effectively, no matter how much fertilizer you apply.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">The Right Time to Start</h2>
            <p className="text-center text-lg leading-relaxed mb-8 text-gray-700 max-w-4xl mx-auto">
              <strong>Timing is crucial</strong> for spring lawn care. Wait until:
            </p>
            <ul className="max-w-3xl mx-auto text-left space-y-3 mb-8">
              <li className="text-lg text-gray-700 leading-relaxed">The soil has dried out from winter moisture</li>
              <li className="text-lg text-gray-700 leading-relaxed">The grass has begun to show signs of new growth</li>
            </ul>
            <p className="text-center text-lg leading-relaxed mb-12 text-gray-700 max-w-4xl mx-auto">
              <em>Warning:</em> Starting too early when the soil is still soggy can cause more harm than good by compacting the soil.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">Essential Spring Lawn Care Tasks</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-lg shadow-sm max-w-4xl mx-auto">
              <p className="text-yellow-800 font-semibold text-lg mb-0">
                ⚡ <strong>Action Plan:</strong> Follow these tasks in order for the best results. Each step builds on the previous one.
              </p>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-12 mb-6">1. Rake and Dethatch</h3>
            <p className="text-center text-lg leading-relaxed mb-10 text-gray-700 max-w-4xl mx-auto">
              <strong>Gently rake</strong> your lawn to remove dead grass and debris. If you notice a thick layer of thatch <em>(more than ½ inch)</em>, consider dethatching to improve air and water penetration.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-12 mb-6">2. Aerate Compacted Areas</h3>
            <p className="text-center text-lg leading-relaxed mb-10 text-gray-700 max-w-4xl mx-auto">
              <strong>Core aeration</strong> helps relieve soil compaction and allows air, water, and nutrients to reach grass roots more effectively. <em>Focus on high-traffic areas</em> that tend to become compacted.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-12 mb-6">3. Overseed Bare Spots</h3>
            <p className="text-center text-lg leading-relaxed mb-10 text-gray-700 max-w-4xl mx-auto">
              Spring is an excellent time to <strong>overseed thin or bare areas</strong>. Choose a grass seed that matches your existing lawn and is appropriate for your climate zone.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-12 mb-6">4. Apply Pre-Emergent Herbicide</h3>
            <p className="text-center text-lg leading-relaxed mb-10 text-gray-700 max-w-4xl mx-auto">
              <strong>Prevent crabgrass</strong> and other annual weeds by applying a pre-emergent herbicide <em>before soil temperatures reach 55°F consistently</em>.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-12 mb-6">5. Start Your Fertilization Program</h3>
            <p className="text-center text-lg leading-relaxed mb-6 text-gray-700 max-w-4xl mx-auto">
              Apply a <strong>balanced, slow-release fertilizer</strong> to give your grass the nutrients it needs for healthy spring growth. 
            </p>
            <p className="text-center text-lg leading-relaxed mb-12 text-gray-700 max-w-4xl mx-auto">
              <em>Caution:</em> Avoid high-nitrogen fertilizers early in the season, as they can promote excessive top growth at the expense of root development.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg shadow-sm max-w-4xl mx-auto">
              <p className="text-green-800 font-semibold text-lg mb-0">
                🌱 <strong>Fertilizer Timing:</strong> Apply your first feeding when you see consistent new growth, typically when soil temperatures reach 55-60°F.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">Watering Wisdom</h2>
            <p className="text-center text-lg leading-relaxed mb-6 text-gray-700 max-w-4xl mx-auto">
              Spring typically provides adequate natural moisture, but if you experience a dry spell, <strong>water deeply but infrequently</strong>. 
            </p>
            <p className="text-center text-lg leading-relaxed mb-12 text-gray-700 max-w-4xl mx-auto">
              <em>Why this works:</em> This encourages deep root growth and makes your lawn more drought-resistant later in the season.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">When to Start Mowing</h2>
            <p className="text-center text-lg leading-relaxed mb-6 text-gray-700 max-w-4xl mx-auto">
              Begin mowing when your grass reaches about <strong>3 inches in height</strong>. Set your mower to remove <em>no more than one-third</em> of the grass blade length. 
            </p>
            <p className="text-center text-lg leading-relaxed mb-12 text-gray-700 max-w-4xl mx-auto">
              <strong>Critical tip:</strong> Sharp mower blades are essential for clean cuts that promote healthy growth.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-lg shadow-sm max-w-4xl mx-auto">
              <p className="text-red-800 font-semibold text-lg mb-0">
                ⚠️ <strong>Common Mistake:</strong> Never cut more than 1/3 of the grass blade at once. This stresses the plant and can weaken your lawn.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">Professional Help When You Need It</h2>
            <p className="text-center text-lg leading-relaxed mb-8 text-gray-700 max-w-4xl mx-auto">
              While many spring lawn care tasks can be done yourself, <strong>some situations call for professional expertise</strong>. Consider hiring professionals for:
            </p>
            <ul className="max-w-3xl mx-auto text-left space-y-3 mb-12">
              <li className="text-lg text-gray-700 leading-relaxed">Comprehensive soil testing and analysis</li>
              <li className="text-lg text-gray-700 leading-relaxed">Large-scale aeration projects</li>
              <li className="text-lg text-gray-700 leading-relaxed">Significant disease or pest issues</li>
              <li className="text-lg text-gray-700 leading-relaxed">Complex fertilization programs</li>
            </ul>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-8 rounded-lg shadow-sm max-w-4xl mx-auto">
              <p className="text-gray-800 font-semibold text-lg mb-0">
                🎯 <strong>Bottom Line:</strong> With proper spring care, your lawn will reward you with lush, green growth throughout the growing season. Remember, consistency is key—establish a routine and stick with it for the best results.
              </p>
            </div>

            <p className="text-center text-lg leading-relaxed mb-8 text-gray-700 max-w-4xl mx-auto">
              <em>Ready to get started?</em> Take it one step at a time, and don't hesitate to reach out to professionals when you need expert guidance. Your lawn will thank you for the attention!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for Professional Spring Lawn Care?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experts handle your spring lawn preparation while you enjoy the results.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
          >
            Get Your Spring Service Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost1;