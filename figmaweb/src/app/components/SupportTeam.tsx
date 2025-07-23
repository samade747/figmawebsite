// app/components/SupportTeam.tsx

import Image from 'next/image';

const supportImages = [
  '/teamone.png',
  '/team/team2.png',
  '/team/team3.png',
  '/team/team4.png',
  '/team/team5.png',
];

export default function SupportTeam() {
  return (
    <section className="bg-blue-950 py-16">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Text Section */}
        <div className="text-white text-center md:text-left mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Where Approval is Quick and Support is Personal.
          </h2>
          <p className="text-md sm:text-lg max-w-2xl mx-auto md:mx-0">
            Our dedicated team ensures every client gets the attention and assistance they deserve — fast, friendly, and tailored support from people who care.
          </p>
        </div>

        {/* Image Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {supportImages.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-2 flex items-center justify-center shadow-md"
            >
              <Image
                src={src}
                alt={`Support Team ${index + 1}`}
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
