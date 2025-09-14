import React from 'react'

   const products = [
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil5.jpg",
            title: "Lavender Essential Oil",
            description: "Calming and relaxing, perfect for aromatherapy.",
            price: 12.99,
            rating: 4.8
        },
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil6.jpg", 
            title: "Peppermint Essential Oil",
            description: "Invigorating scent, great for headaches and focus.",
            price: 10.99,
            rating: 4.7
        },
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil7.jpg",
            title: "Tea Tree Essential Oil",
            description: "Natural antiseptic, ideal for skin care.",
            price: 14.99,
            rating: 4.6
        },
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil8.jpg", 
            title: "Eucalyptus Essential Oil",
            description: "Refreshing and cleansing, supports respiratory health.",
            price: 11.99,
            rating: 4.5
        },
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil1.jpg",
            title: "Lemon Essential Oil",
            description: "Bright citrus aroma, boosts mood and energy.",
            price: 9.99,
            rating: 4.7
        },
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil4.jpg",
            title: "Frankincense Essential Oil",
            description: "Soothing and grounding, used for meditation.",
            price: 16.99,
            rating: 4.9
        },
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil10.jpg",
            title: "Rosemary Essential Oil",
            description: "Stimulates mind and improves memory.",
            price: 13.99,
            rating: 4.6
        },
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil12.jpg", 
            title: "Sweet Orange Essential Oil",
            description: "Uplifting and cheerful, great for diffusers.",
            price: 8.99,
            rating: 4.8
        },
        {
            img: "https://cinnamon-pure-oil.vercel.app/webassets/cinnamonoil17.webp", 
            title: "Chamomile Essential Oil",
            description: "Gentle and soothing, helps with sleep.",
            price: 15.99,
            rating: 4.7
        }
    ];

const Products = () => {
  return (
    <div className='p-20'>
      <div>
        <h2 className='text-5xl text-center font-semibold pb-10'>Our Products
           <div className="w-40 h-1 bg-orange-400 mx-auto mt-4 rounded"></div>
        </h2>
        
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {products.map((product) => (
          <div key={product.title} className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4 items-center">
            <img
              src={product.img}
              alt={product.title}
              className="w-32 h-32 object-cover mb-4 rounded"
              
            />
            <h3 className="text-lg font-semibold ">{product.title}</h3>
            <p className="text-gray-600 ">{product.description}</p>
            <div className="flex items-center">
              <span className="mr-1" style={{ color: '#F26830' }}>★</span>
              <span className="text-sm">{product.rating}</span>
            </div>
            <span className="font-bold text-lg" style={{ color: '#F26830' }}>
              ${product.price.toFixed(2)}
            </span>
            <button
              aria-label={`Add ${product.title} to cart`}
              className=" px-4 py-2 text-white rounded hover:opacity-90 bg-black hover:bg-[#F26830] transition-all duration-300 ease-in-out cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;





