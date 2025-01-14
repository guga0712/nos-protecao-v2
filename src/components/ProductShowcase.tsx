import { Button } from '@/components/ui/button'

const products = [
  {
    name: 'SmartLock Pro',
    description: 'Advanced GPS-enabled lock for real-time tracking and tamper alerts',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    name: 'SecureTrack™',
    description: 'Comprehensive fleet management system with AI-powered route optimization',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    name: 'CargoGuard',
    description: 'Durable, weather-resistant cargo seals with blockchain verification',
    image: '/placeholder.svg?height=300&width=400',
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-12 md:py-24 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gold-500">Our Premium Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gold-500">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <Button variant="outline" className="w-full bg-gold-500 text-black hover:bg-gold-600">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

