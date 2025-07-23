// app/components/Logos.tsx

import Image from 'next/image';

const logos = [
  '/logo1.png',
  '/logo2.png',
  '/logo3.png',
  '/logo4.png',
  '/logo5.png',
  '/logo6.png',
];

export default function Logos() {
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={src}
                alt={`Partner logo ${index + 1}`}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
