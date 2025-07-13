"use client";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub, FaPhone, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] py-12 px-4">
      <div className="bg-[#0f172a]/95 border border-[#334155] rounded-2xl shadow-xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-[#60a5fa] mb-6 text-center">Liên hệ với tôi</h1>
        <div className="space-y-5 text-[#cbd5e1]">
          <div className="flex items-center gap-3">
            <FaPhone className="text-[#60a5fa] text-xl" />
            <span>0981170703</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#60a5fa] text-xl" />
            <span>anhductrannguyen170703@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaBirthdayCake className="text-[#60a5fa] text-xl" />
            <span>17/07/2003</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#60a5fa] text-xl" />
            <span>Đống Đa, Hà Nội</span>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <Link href="mailto:anhductrannguyen170703@gmail.com" target="_blank" className="text-[#60a5fa] hover:text-white text-3xl transition">
            <FaEnvelope />
          </Link>
          <Link href="https://facebook.com/" target="_blank" className="text-[#60a5fa] hover:text-white text-3xl transition">
            <FaFacebook />
          </Link>
          <Link href="https://linkedin.com/" target="_blank" className="text-[#60a5fa] hover:text-white text-3xl transition">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/" target="_blank" className="text-[#60a5fa] hover:text-white text-3xl transition">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
