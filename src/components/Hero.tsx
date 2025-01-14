import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gold-500">
            Secure Your Cargo,<br />Protect Your Business
          </h1>
          <p className="text-xl mb-6 text-gray-300">
            Premium cargo security solutions for the modern world
          </p>
          <Button size="lg" className="bg-gold-500 text-black hover:bg-gold-600">
            Explore Our Products
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Secured cargo truck"
            className="rounded-lg shadow-2xl"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

