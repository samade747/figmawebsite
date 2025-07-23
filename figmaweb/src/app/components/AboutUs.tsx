// app/components/AboutUs.tsx

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const features = [
  'Decades of Trusted',
  'Certified Expertise',
  'Experienced Approach',
  'Accountability Partner',
  'Committed to Excellence',
  'Rooted in Integrity',
];

export default function AboutUs() {
  return (
    <section className="bg-white py-16">
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Trusted Business Funding
          </h2>
          <h3 className="text-xl text-indigo-600 font-semibold mb-4">
            Experts in Hilltop Mall, CA
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We help businesses like yours unlock growth and financial stability with fast, flexible, and trusted funding solutions. Our approach is built on relationships, transparency, and proven expertise.
          </p>

          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold">
            About Us →
          </button>
        </div>

        {/* Right: Centered Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/Aboutus.png" 
            alt="About Us"
            width={500}
            height={400}
            className="rounded-md object-cover shadow-md w-full h-auto max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
