import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-500">
          Ready to Secure Your Cargo?
        </h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Don't compromise on security. Get in touch with us today and discover
          how Nós Proteção can protect your valuable shipments.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            size="lg"
            className="bg-gold-500 text-black hover:bg-gold-600"
          >
            Request a Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
