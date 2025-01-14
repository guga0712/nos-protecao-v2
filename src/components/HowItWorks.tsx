import { Package, Truck, Shield, CheckCircle } from 'lucide-react'

const steps = [
  { icon: Package, title: 'Secure Packaging', description: 'Your cargo is carefully packaged and sealed' },
  { icon: Truck, title: 'Smart Tracking', description: 'Real-time GPS monitoring throughout the journey' },
  { icon: Shield, title: 'Active Protection', description: 'AI-powered system detects and prevents threats' },
  { icon: CheckCircle, title: 'Safe Delivery', description: 'Cargo arrives intact with verification' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gold-500">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gold-500 rounded-full p-4 mb-4">
                <step.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

