import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CollectionsPage = () => {
  const collections = [
    {
      id: 1,
      name: "Summer Essentials",
      description: "Lightweight fabrics and breezy styles for warm weather",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      category: "summer"
    },
    {
      id: 2,
      name: "Winter Warmers",
      description: "Cozy knits and insulated layers for cold days",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
      category: "winter"
    },
    {
      id: 3,
      name: "Office Elegance",
      description: "Professional attire with modern comfort",
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891",
      category: "formal"
    },
    {
      id: 4,
      name: "Weekend Casual",
      description: "Relaxed styles for your downtime",
      image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
      category: "casual"
    },
    {
      id: 5,
      name: "Athleisure",
      description: "Performance meets style for active lives",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      category: "sport"
    },
    {
      id: 6,
      name: "Evening Glam",
      description: "Statement pieces for special occasions",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      category: "evening"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-purple-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-400 rounded-full mix-blend-overlay"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Collections</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
                Carefully curated selections for every occasion and season
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <div key={collection.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={`${collection.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`}
                      alt={collection.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{collection.name}</h3>
                      <p className="text-gray-200 mb-4">{collection.description}</p>
                      <Link
                        to={`/products?category=${collection.category}`}
                        className="inline-block bg-white text-indigo-700 px-6 py-2 rounded-full font-medium hover:bg-indigo-100 transition-all"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CollectionsPage