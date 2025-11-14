"use client";

import { FiMusic, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fadeIn">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-primary-100 rounded-full">
              <FiMusic className="w-12 h-12 md:w-16 md:h-16 text-primary-600" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Sajan Maharjan
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 font-medium">
            Musician & Cultural Researcher
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Dedicated to preserving and celebrating the rich heritage of Newari
            music through performance, research, and education.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#gallery"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Performances
            </Link>
            <Link
              href="#publications"
              className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all"
            >
              Research Papers
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Link
              href="#about"
              className="inline-flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <FiChevronDown size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    </section>
  );
};

export default Hero;
