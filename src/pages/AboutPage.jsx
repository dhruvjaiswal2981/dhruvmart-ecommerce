import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-purple-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-400 rounded-full mix-blend-overlay"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Crafting exceptional experiences through quality products and passionate service
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Our team"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">Who We Are</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2025, DhruvMart began as a small boutique with a big vision - to bring 
                  thoughtfully designed, high-quality products to fashion-forward individuals at 
                  accessible prices. What started as a single storefront has grown into a beloved 
                  brand with customers across the country.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team of designers, buyers, and stylists scour the globe to bring you pieces 
                  that combine timeless aesthetics with modern functionality. We believe fashion 
                  should make you feel as good as you look.
                </p>
                <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To inspire confidence and self-expression through carefully curated collections 
                    that celebrate individuality without compromising on quality or comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description: "We meticulously vet every product for craftsmanship and durability",
                  icon: "✨"
                },
                {
                  title: "Customer Joy",
                  description: "Your satisfaction is our ultimate measure of success",
                  icon: "❤️"
                },
                {
                  title: "Sustainable Practices",
                  description: "Committed to ethical sourcing and reducing environmental impact",
                  icon: "🌱"
                },
                {
                  title: "Authenticity",
                  description: "We celebrate real styles for real people",
                  icon: "💎"
                },
                {
                  title: "Innovation",
                  description: "Constantly evolving to bring you fresh perspectives",
                  icon: "🚀"
                },
                {
                  title: "Community",
                  description: "Building connections through shared love of style",
                  icon: "👥"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team CTA */}
        <section className="py-16 bg-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Follow our journey and be the first to know about new arrivals and exclusive offers
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-indigo-100 transition-all">
                Follow on Instagram
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-indigo-900 transition-all">
                Sign Up for Newsletter
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage