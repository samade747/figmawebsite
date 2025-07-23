// app/components/Solutions.tsx

import Image from 'next/image';
import Link from 'next/link';

const solutionImages = [
  '/bg1.png',
  '/bg2.png',
  '/bg3.png',
];

export default function Solutions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] md:w-[70%] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Funding Solutions that fit your Business
        </h2>

        {/* Solution Boxes */}
        <div className="space-y-8 mb-10">
          {solutionImages.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden p-4"
            >
              <Image
                src={src}
                alt={`Funding Solution ${index + 1}`}
                width={800}
                height={200}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <Link href="/solutions">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold">
            View More →
          </button>
        </Link>
      </div>
    </section>
  );
}
