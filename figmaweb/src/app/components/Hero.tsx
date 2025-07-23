// app/components/Hero.tsx

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{ backgroundImage: "url('/Section.png')" }} // ✅ Save your image in /public/hero.jpg
    >
      <div className="absolute inset-0  bg-opacity-10"></div> {/* Overlay */}

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-white text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Smart Credit For Smarter <br className="hidden md:block" />
          Business Decisions
        </h1>
        <p className="text-md sm:text-lg md:text-xl max-w-2xl mb-6">
          This text is a temporary placeholder and needs to be replaced with SEO-friendly content and relevant keywords.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 rounded-md font-semibold text-white shadow-md transition duration-300">
            Get in Touch →
          </button>
        </Link>
      </div>
    </section>
  );
}
