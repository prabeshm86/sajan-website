import Link from "next/link";
import { FiMail, FiMusic, FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FiMusic className="w-6 h-6 text-primary-500" />
              <span className="font-display text-xl font-bold text-white">
                Sajan Maharjan
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Musician, Performer, and Researcher dedicated to preserving and
              promoting Newari musical traditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#publications"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:contact@sajanmaharjan.com"
                className="hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="YouTube"
              >
                <FiYoutube size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Feel free to reach out for collaborations or inquiries.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Sajan Maharjan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
