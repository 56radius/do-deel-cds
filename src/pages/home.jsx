  import React from 'react';

  //importing images
  import final from "../assets/images/nyscsecond.jpg";

  const HomePage = () => {
    return (
      <div
        className="bg-gradient-to-b from-[#101212] to-[#08201D] min-h-screen text-white relative"
        style={{
          backgroundImage: `url(${final})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
      }}
      >
        {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Header */}
        <header className="absolute inset-x-0 top-0 z-10 w-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a href="#" className="text-base transition-all duration-200 hover:text-opacity-80">Home</a>
                <a href="#" className="text-base transition-all duration-200 hover:text-opacity-80">About</a>
                <a href="#" className="text-base transition-all duration-200 hover:text-opacity-80">Services</a>
                <a href="#" className="text-base transition-all duration-200 hover:text-opacity-80">Contact</a>
              </div>

              <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                <a href="#" className="hidden text-base transition-all duration-200 lg:inline-flex hover:text-opacity-80">Log in</a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 bg-white/20 hover:bg-white/40 rounded-lg"
                >
                  Apply for free
                </a>
              </div>

              <button
                type="button"
                className="inline-flex p-2 ml-1 transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="text-4xl font-bold sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                  Welcome To Do-Deel <br /> Ogun State
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-xl">
              At DO-DEEL Ogun State, we are committed to fostering digital literacy, supporting local businesses, and educating the youth.
              </p>

              <a
                href="#"
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700"
              >
                Care To Know more?
                <svg className="w-6 h-6 ml-8 -mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About section */}

      </div>
    );
  };

  export default HomePage;
