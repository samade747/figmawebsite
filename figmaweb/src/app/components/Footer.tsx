// components/Footer.tsx
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Garcia Enterprises</h2>
          <p className="text-sm">
            We provide reliable funding solutions and business support you can
            trust. Located in Hilltop Mall, CA.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-white hover:text-blue-500" />
            <FaTwitter className="text-white hover:text-blue-400" />
            <FaLinkedin className="text-white hover:text-blue-700" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Solutions</a></li>
            <li><a href="#" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400">Stories</a></li>
            <li><a href="#" className="hover:text-blue-400">News</a></li>
            <li><a href="#" className="hover:text-blue-400">Get in Touch</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +1 555 123 4567</li>
            <li>✉️ contact@garciafunding.com</li>
            <li>📍 Hilltop Mall, CA</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Garcia Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
