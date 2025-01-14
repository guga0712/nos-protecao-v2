import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    company: "Global Logistics Co.",
    quote:
      "Nós Proteção has revolutionized our supply chain security. Their products are top-notch.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    company: "Express Freight Ltd.",
    quote:
      "The peace of mind we get with Nós Proteção is invaluable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Brown",
    company: "Intercontinental Shipping",
    quote:
      "Excellent products backed by outstanding customer support. A game-changer for us.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gold-500">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-gold-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gold-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
