"use client";
// components/Header.tsx
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white-100 text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center color-black text-blue-700">
        <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            {t.name}
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors ">
              {t.home}
            </Link>
          </li>
          <li>
            <Link href="#skill" className="hover:text-blue-400 transition-colors">
              {t.skill}
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              {t.projects}
            </Link>
          </li>
          <li>
            <Link href="#Experience" className="hover:text-blue-400 transition-colors">
              {t.experience}
            </Link>
          </li>
           <li>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              {t.contact}
            </Link>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'vi' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-blue-400 hover:text-blue-300'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-blue-400 hover:text-blue-300'
                }`}
              >
                EN
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;