const NotFound = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            {/* Animated Flower Character */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
              {/* Floating flowers */}
              <div className="absolute top-10 left-10 animate-float" style={{ animationDelay: '0s' }}>
                <span className="text-6xl opacity-30">🌸</span>
              </div>
              <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-5xl opacity-30">🌺</span>
              </div>
              <div className="absolute bottom-10 left-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <span className="text-4xl opacity-30">🌼</span>
              </div>
              
              {/* Main Flower Character */}
              <div className="relative z-10">
                <div className="text-9xl sm:text-[12rem] md:text-[14rem] animate-wiggle">
                  🌻
                </div>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl font-black text-gray-800 drop-shadow-lg">
                  404
                </h1>
              </div>
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Oops! Looks like this flower got lost 🌸
              </h3>
              <p className="mb-6 text-gray-600 text-lg">
                The page you are looking for doesn't exist or has been moved.
              </p>

              <a
                href="/"
                className="inline-block my-5 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                🏠 Go Back Home
              </a>
              
              {/* Decorative elements */}
              <div className="mt-8 flex justify-center gap-4 text-4xl">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌷</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌹</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
