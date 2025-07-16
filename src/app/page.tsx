"use client";


import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 3000,
      offset: 3000, // Trigger animation sớm hơn
      delay: 3000, // Delay giữa các animation
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155]">
      <div
        className="flex flex-col md:flex-row items-center w-full max-w-5xl mt-12"
        data-aos="fade-up"
      >
        {/* Avatar + Social */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/2">
          <div className="rounded-b-[120px] rounded-t-[120px] overflow-hidden bg-gradient-to-b from-[#1e40af] to-[#1d4ed8] p-2 w-72 h-96 flex items-center justify-center border-4 border-[#3b82f6] shadow-xl">
          </div>
          <div className="flex flex-col items-center mt-6 space-y-4 md:space-y-6">
            <Link
              href="#"
              className="text-[#60a5fa] text-2xl hover:text-[#3b82f6] transition"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              href="#"
              className="text-[#60a5fa] text-2xl hover:text-[#3b82f6] transition"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              href="#"
              className="text-[#60a5fa] text-2xl hover:text-[#3b82f6] transition"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link
              href="#"
              className="text-[#60a5fa] text-2xl hover:text-[#3b82f6] transition"
            >
              <i className="fab fa-x-twitter"></i>
            </Link>
          </div>
        </div>
        {/* Info */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mt-10 md:mt-0 md:pl-16">
          <p className="text-lg text-[#94a3b8] mb-2">{t.greeting}</p>
          <h1 className="text-5xl font-bold text-[#60a5fa] mb-2 drop-shadow">
            {t.name}
          </h1>
          <h2 className="text-2xl text-[#cbd5e1] mb-6 tracking-widest">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-[#3b82f6] mb-8"></div>
          <div className="flex space-x-4">
            <Link
              href="/about"
              className="px-6 py-2 border-2 border-[#3b82f6] rounded-full text-[#60a5fa] font-semibold hover:bg-[#1e293b] transition"
            >
              {t.about}
            </Link>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-2 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] text-white rounded-full font-semibold shadow hover:from-[#2563eb] hover:to-[#1e40af] transition"
            >
              {t.downloadCV}
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section - Tổng hợp tất cả skills */}
      <div
        className="w-screen px-8 py-12 bg-[#1e293b]/90 shadow-xl rounded-3xl flex justify-center my-8 border border-[#334155] backdrop-blur-md"
        data-aos="fade-up"
      >
        <div className="w-full max-w-4xl">
          <div className="font-bold mb-8 text-3xl text-[#60a5fa] text-center">
            {t.skillsTitle}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-code text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-[#60a5fa]">{t.frontend}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">ReactJS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">Angular</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">VueJS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">NextJS</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-server text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-[#0ea5e9]">{t.backend}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">Spring Boot</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">ASP.NET</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">PHP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">NestJS</span>
                </div>
              </div>
            </div>

            {/* Database */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d97706] to-[#b45309] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-database text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-[#d97706]">{t.database}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">MySQL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">PostgreSQL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">SQL Server</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-tools text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-[#10b981]">{t.tools}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">GitHub</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">GitLab</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">Postman</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#cbd5e1]">Swagger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Kinh nghiệm làm việc */}
      <div
        className="w-screen px-8 py-12 bg-[#1e293b]/90 shadow-xl rounded-3xl flex justify-center my-8 border border-[#334155] backdrop-blur-md"
        data-aos="fade-up"
      >
        <div className="w-full max-w-4xl">
          <div className="font-bold mb-8 text-3xl text-[#60a5fa] text-center">
            {t.experienceTitle}
          </div>

          <div className="space-y-6">
            {/* Education */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-[#3b82f6] mr-4">
                  <Image
                    src="/school/uneti.jpg"
                    alt="UNETI"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#60a5fa]">
                    {t.unetiUniversity}
                  </h3>
                  <p className="text-[#94a3b8] text-sm">{t.period}</p>
                  <p className="text-[#cbd5e1] font-semibold">
                    {t.informationTechnology}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-[#1e293b] p-3 rounded-lg">
                  <div className="text-xl font-bold text-[#60a5fa]">3.3</div>
                  <div className="text-xs text-[#94a3b8]">GPA</div>
                </div>
                <div className="bg-[#1e293b] p-3 rounded-lg">
                  <div className="text-xl font-bold text-[#0ea5e9]">2</div>
                  <div className="text-xs text-[#94a3b8]">Scholarships</div>
                </div>
                <div className="bg-[#1e293b] p-3 rounded-lg">
                  <div className="text-xl font-bold text-[#d97706]">10+</div>
                  <div className="text-xs text-[#94a3b8]">Courses</div>
                </div>
              </div>
            </div>

            {/* TCSOFT */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-[#3b82f6] mr-4">
                  <Image
                    src="/school/tcsoft.jpg"
                    alt="TCSOFT"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#60a5fa]">TCSOFT</h3>
                  <p className="text-[#94a3b8] text-sm">12/2024 - 3/2025</p>
                  <p className="text-[#cbd5e1] font-semibold">
                    Frontend & Backend Developer
                  </p>
                </div>
              </div>
              <p className="text-[#cbd5e1] text-sm mb-3">
                Coffee Shop Management System - Order processing, inventory
                tracking, sales reporting
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1e293b] text-[#60a5fa] px-3 py-1 rounded-full text-xs font-semibold">
                  Angular
                </span>
                <span className="bg-[#1e293b] text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-semibold">
                  ASP.NET
                </span>
                <span className="bg-[#1e293b] text-[#d97706] px-3 py-1 rounded-full text-xs font-semibold">
                  SQL Server
                </span>
              </div>
            </div>

            {/* ECOIT */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-[#3b82f6] mr-4">
                  <Image
                    src="/school/ecoit.jpg"
                    alt="ECOIT"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#60a5fa]">ECOIT</h3>
                  <p className="text-[#94a3b8] text-sm">3/2025 - 6/2025</p>
                  <p className="text-[#cbd5e1] font-semibold">
                    Frontend & Backend Developer
                  </p>
                </div>
              </div>
              <p className="text-[#cbd5e1] text-sm mb-3">
                Enterprise Content Management (ECM) system for Thai Nguyen
                province government
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1e293b] text-[#60a5fa] px-3 py-1 rounded-full text-xs font-semibold">
                  VueJS
                </span>
                <span className="bg-[#1e293b] text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-semibold">
                  Spring Boot
                </span>
                <span className="bg-[#1e293b] text-[#d97706] px-3 py-1 rounded-full text-xs font-semibold">
                  PostgreSQL
                </span>
              </div>
            </div>

            {/* The One Studio Game */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-[#3b82f6] mr-4">
                  <Image
                    src="/school/theonestudio.jpg"
                    alt="The One Studio Game"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#60a5fa]">
                    The One Studio Game
                  </h3>
                  <p className="text-[#94a3b8] text-sm">3/2025 - 6/2025</p>
                  <p className="text-[#cbd5e1] font-semibold">
                    Fresher Developer
                  </p>
                </div>
              </div>
              <p className="text-[#cbd5e1] text-sm mb-3">
                Game promotion website and blog platform with authentication
                features
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1e293b] text-[#60a5fa] px-3 py-1 rounded-full text-xs font-semibold">
                  NextJS
                </span>
                <span className="bg-[#1e293b] text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-semibold">
                  NestJS
                </span>
                <span className="bg-[#1e293b] text-[#d97706] px-3 py-1 rounded-full text-xs font-semibold">
                  MySQL
                </span>
              </div>
            </div>

            {/* Projects */}
            <div
              className="bg-[#0f172a]/95 rounded-xl p-6 shadow-lg border border-[#334155] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-project-diagram text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#60a5fa]">
                    Personal Projects
                  </h3>
                  <p className="text-[#94a3b8] text-sm">10/2023 - 2/2024</p>
                  <p className="text-[#cbd5e1] font-semibold">
                    FullStack Developer
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1e293b] p-4 rounded-lg">
                  <h4 className="font-bold text-[#60a5fa] mb-2">
                    CottonUSA Clone
                  </h4>
                  <p className="text-xs text-[#cbd5e1] mb-2">
                    E-commerce platform with authentication, shopping cart,
                    payment integration
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-[#0f172a] text-[#60a5fa] px-2 py-1 rounded text-xs">
                      ReactJS
                    </span>
                    <span className="bg-[#0f172a] text-[#60a5fa] px-2 py-1 rounded text-xs">
                      Java Spring Boot
                    </span>
                    <span className="bg-[#0f172a] text-[#60a5fa] px-2 py-1 rounded text-xs">
                      MySQL
                    </span>
                  </div>
                </div>
                <div className="bg-[#1e293b] p-4 rounded-lg">
                  <h4 className="font-bold text-[#0ea5e9] mb-2">
                    IvyModa Clone
                  </h4>
                  <p className="text-xs text-[#cbd5e1] mb-2">
                    Fashion e-commerce platform with modern UI/UX design
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-[#0f172a] text-[#0ea5e9] px-2 py-1 rounded text-xs">
                      ReactJS
                    </span>
                    <span className="bg-[#0f172a] text-[#0ea5e9] px-2 py-1 rounded text-xs">
                      PHP
                    </span>
                    <span className="bg-[#0f172a] text-[#0ea5e9] px-2 py-1 rounded text-xs">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
