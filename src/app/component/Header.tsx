// components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white-100 text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center color-black text-blue-700">
        <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Nguyễn Trần Đức Anh
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors ">
              Home
            </Link>
          </li>
          <li>
            <Link href="#skill" className="hover:text-blue-400 transition-colors">
              Skill
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#Experience" className="hover:text-blue-400 transition-colors">
              Experience
            </Link>
          </li>
           <li>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;