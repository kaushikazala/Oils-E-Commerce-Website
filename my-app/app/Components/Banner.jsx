import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="relative">
       
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 px-6">
          <div className="space-y-10">
            <span className="inline-block bg-[#F26830]/20 text-[#F26830] text-xs font-semibold px-4 py-2 rounded-full shadow">
              New Arrival
            </span>
            

            <h1 className="text-5xl md:text-8xl font-extrabold leading-tight text-gray-900">
              Cinnamon Essential <span className="text-[#F26830]">Oil</span>
            </h1>

            <p className="text-lg text-gray-700">
              Discover the pure essence of cinnamon. Elevate your senses and well-being with our premium essential oil, crafted for quality and authenticity.
            </p>

            <div className="flex gap-5 pt-3 mt-10">
              <button className="bg-[#F26830] hover:bg-[#d45727] transition text-white rounded-lg px-8 py-4 font-semibold shadow">
                Explore Now
              </button>
              <button className="border border-[#F26830] text-[#F26830] hover:bg-[#F26830]/10 transition rounded-lg px-8 py-4 font-semibold shadow">
                How To Buy
              </button>
            </div>

            <div className="flex items-center gap-4 p-5 border-2 border-[#F26830]/20 rounded-xl shadow-md md:w-2/3 bg-white">
              <div className="flex-shrink-0 text-[#F26830]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m10-4v4m0 0H7m10 0V4m0 4H7" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Free shipping on orders over $50. Experience fast delivery and premium packaging.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center" >
            <img
              src="https://cinnamon-pure-oil.vercel.app/_next/image?url=%2Fwebassets%2Fbanner2.png&w=640&q=75"
              alt="Cinnamon Essential Oil Banner"
              width={600}
              height={600}
              className="rounded-xl object-cover w-full h-[600px] md:h-[600px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
