// components/GetInTouch.tsx

'use client'

import React from 'react'

const GetInTouch = () => {
  return (
    <section className="w-full flex justify-center items-center bg-gray-100 py-16 px-4">
      <div className="bg-white w-full max-w-7xl rounded-xl shadow-md flex flex-col md:flex-row p-8 md:p-12 gap-8 md:gap-12">
        {/* Text & Form Left Side */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or want to learn more? We’re here to help.
            Fill out the form and our team will get back to you shortly.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit Now →
            </button>
          </form>
        </div>

        {/* Image Right Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/contact-us.png" // ⬅️ Replace with your image path
            alt="Get in Touch Illustration"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
