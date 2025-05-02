import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-pink-400 rounded-full mix-blend-overlay"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-300 rounded-full mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content */}
          <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your <span className="text-pink-300">Everyday Style</span> with Premium Fashion
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Discover handpicked collections that blend timeless elegance with modern comfort. 
              Our pieces are designed to inspire confidence in every occasion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/products"
                className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg text-center"
              >
                Shop New Arrivals
              </Link>
              <Link
                to="/products?category=men"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-900 hover:scale-105 transform transition-all duration-300 text-center"
              >
                Explore Collections
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item+20}.jpg`}
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm opacity-80">Trusted by 10,000+ fashion lovers</p>
              </div>
            </div>
          </div>
          
          {/* Image content */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Fashion Model"
                className="rounded-xl shadow-2xl w-full max-w-md object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg text-indigo-900 hidden md:block">
                <div className="font-bold text-lg">Summer Sale</div>
                <div className="text-2xl font-extrabold">UP TO 50% OFF</div>
                <div className="text-sm">Selected items</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero