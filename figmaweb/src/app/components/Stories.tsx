'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

const testimonials = [
  {
    text: "“Kudos to their amazing funding solutions. We went from idea to execution in weeks.”",
    name: 'Simon Rhodes',
    company: 'Founder, Classsy',
  },
  {
    text: "“Their support and expertise were game-changers for our startup. Highly recommended!”",
    name: 'Ava Coleman',
    company: 'CEO, NovaTech',
  },
  {
    text: "“Fast approvals and personal support – exactly what our business needed.”",
    name: 'Michael Dean',
    company: 'COO, GreenFuel',
  },
  {
    text: "“Working with this team has been a delight — transparent and effective every step.”",
    name: 'Rachel Wu',
    company: 'CTO, SoftMatter',
  },
];

export default function Stories() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1 },
      },
    },
    loop: true,
  });

  return (
    <section className="bg-white py-16">
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Real Stories. Real Success
        </h2>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((story, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div className="bg-white border rounded-lg shadow-md p-6 mx-2 h-full flex flex-col justify-between">
                <p className="text-gray-600 italic mb-6">“{story.text}”</p>
                <div className="text-left mt-auto">
                  <p className="font-semibold text-gray-800">{story.name}</p>
                  <p className="text-sm text-gray-500">{story.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        {instanceRef.current && (
          <div className="mt-6 flex justify-center space-x-2">
            {(() => {
              const optionsSlides = instanceRef.current.options.slides;
              let perView = 1;
              if (typeof optionsSlides === 'object' && optionsSlides !== null && 'perView' in optionsSlides && typeof optionsSlides.perView === 'number') {
                perView = optionsSlides.perView;
              }
              const numDots = Math.ceil(instanceRef.current.track.details.slides.length / perView);
              return [...Array(numDots)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx * perView)}
                  className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-600 transition"
                />
              ));
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
