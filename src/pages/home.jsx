import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D] min-h-screen text-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
          
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" className="text-base transition-all duration-200 hover:text-opacity-80">Features</a>
              <a href="#" className="text-base transition-all duration-200 hover:text-opacity-80">Solutions</a>
              <a href="#" className="text-base transition-all duration-200 hover:text-opacity-80">Resources</a>
              <a href="#" className="text-base transition-all duration-200 hover:text-opacity-80">Pricing</a>
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
      <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
      

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                Welcome To Do-Deel
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-xl">
              No more hassle taking loans and making payments. Try Postcrats credit card, make your life simple.
            </p>

            <a
              href="#"
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700"
            >
              Care To Know more ?
              <svg className="w-6 h-6 ml-8 -mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            {/* Highlights */}
            <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              <div className="flex items-center">
                <svg width="31" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z" stroke="#28CC9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z" stroke="#28CC9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z" fill="#0B1715" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z" fill="#0B1715" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="ml-3 text-sm">Over 12,000 students joined</p>
              </div>

              <div className="flex items-center">
                <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Add additional path elements here if needed */}
                </svg>
                <p className="ml-3 text-sm">Safe & secured for every transaction</p>
              </div>

              <div className="flex items-center">
                <svg width="24" height="24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" />
                  <path d="M8 12.5L11 15.5L16 10" stroke="#28CC9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="ml-3 text-sm">Approval in under 3 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
