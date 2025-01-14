import { Shield, Lock, Truck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gold-500">
          About Nós Proteção
        </h2>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-gray-300">
          With over two decades of experience, Nós Proteção leads the industry
          in innovative cargo security solutions. Our commitment to quality and
          reliability ensures your goods are protected at every step of their
          journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Unmatched Security",
              description: "State-of-the-art technology for maximum protection",
            },
            {
              icon: Lock,
              title: "Reliable Solutions",
              description: "Trusted by leading businesses worldwide",
            },
            {
              icon: Truck,
              title: "Global Coverage",
              description: "Protecting cargo across international borders",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <item.icon className="h-16 w-16 mb-4 text-gold-500" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
