'use client'

import React from 'react'

const News = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Latest News & Updates
        </h2>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/news1.jpg"
              alt="News 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Funding Reimagined for Small Business
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how our team is transforming the funding space with innovative solutions.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/news2.jpg"
              alt="News 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Local Impact: Hilltop Success Story
              </h3>
              <p className="text-gray-600 mb-4">
                A deep dive into how one local business grew with our support and partnership.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/news3.jpg"
              alt="News 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Expansion Plans 2025 Announced
              </h3>
              <p className="text-gray-600 mb-4">
                We’re growing across California to bring trusted funding to more entrepreneurs.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
