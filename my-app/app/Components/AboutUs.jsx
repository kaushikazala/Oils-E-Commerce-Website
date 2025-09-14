import React from "react";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 gap-10 items-center ">
      <div className="">
        <img
          src="https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil5.jpg"
          alt="oli image"
          width={600}
          height={600}
        />
      </div>
      <div className="space-y-10">
        <h1 className="text-7xl font-semibold ">About Us</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our essential oils store! We are passionate about providing
          high-quality, natural essential oils that enhance your well-being and
          transform your space. Our oils are sourced from the finest
          ingredients, ensuring purity and potency in every drop.
        </p>
        <p className="text-lg text-gray-700 mb-4">
            Whether you're looking for relaxation, rejuvenation, or a boost of
            energy, our diverse range of essential oils has something for everyone.
            From calming lavender to invigorating peppermint, we have carefully
            curated our collection to meet your needs. Explore our selection and
            discover the power of nature in every bottle.
        </p>
         <button

              className="mt-4 px-4 py-2 text-white rounded hover:opacity-90 bg-black hover:bg-[#F26830] transition-all duration-300 ease-in-out cursor-pointer"
            >
              Read More
            </button>
      </div>
    </div>
  );
};

export default AboutUs;
