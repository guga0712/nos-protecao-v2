import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center text-gold-500">
          <Shield className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Nós Proteção</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#about"
            className="text-white hover:text-gold-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="#products"
            className="text-white hover:text-gold-500 transition-colors"
          >
            Products
          </Link>
          <Link
            href="#how-it-works"
            className="text-white hover:text-gold-500 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-white hover:text-gold-500 transition-colors"
          >
            Testimonials
          </Link>
        </nav>
        <Button
          variant="outline"
          className="bg-gold-500 text-black hover:bg-gold-600"
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
}
