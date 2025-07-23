// app/components/Navbar.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">GARICA ENTERPRISES</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-700">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/loan">LOAN ONLINE APPLICATION</Link>
            <a href="tel:7074605595" className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md">
              <Phone className="w-4 h-4 mr-1" />
              707-460-5595
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 mt-2 pb-4">
            <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
            <Link href="/loan" onClick={() => setIsOpen(false)}>LOAN ONLINE APPLICATION</Link>
            <a href="tel:7074605595" className="flex items-center bg-gray-800 text-white px-3 py-2 rounded-md w-fit">
              <Phone className="w-4 h-4 mr-1" />
              707-460-5595
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
