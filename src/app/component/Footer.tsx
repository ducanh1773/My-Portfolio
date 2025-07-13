// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
      <div className="container mx-auto">
        <p className="mb-2">© {new Date().getFullYear()} Nguyễn Trần Đức Anh. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            LinkedIn
          </Link>
          {/* Add more social links if desired */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;