import Link from "next/link";
import {
  Shield,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-8 w-8 text-gold-500 mr-2" />
            <span className="text-2xl font-bold text-white">Nós Proteção</span>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="#about"
              className="text-gray-300 hover:text-gold-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-gray-300 hover:text-gold-500 transition-colors"
            >
              Products
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-gold-500 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-300 hover:text-gold-500 transition-colors"
            >
              Testimonials
            </Link>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2023 Nós Proteção. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gold-500 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gold-500 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gold-500 transition-colors"
            >
              <LinkedIn className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
