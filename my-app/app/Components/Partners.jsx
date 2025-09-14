import React from 'react';

const Partners = () => {
    return (
        <div className="py-12 bg-white grid place-items-center">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid gap-8">
                <h1 className="text-5xl text-center font-semibold pb-10">
                    Our Partners
                    <div className="w-40 h-1 bg-orange-400 mx-auto mt-4 rounded"></div>
                </h1>
                 
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
                    <div className="flex justify-center">
                        <img className="h-16 w-auto" src="https://cinnamon-pure-oil.vercel.app/Partners/partner1.png" alt="Partner 1" />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-16 w-auto" src="https://cinnamon-pure-oil.vercel.app/Partners/partner2.png" alt="Partner 2" />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-16 w-auto" src="https://cinnamon-pure-oil.vercel.app/Partners/partner3.png" alt="Partner 3" />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-16 w-auto" src="https://cinnamon-pure-oil.vercel.app/Partners/partner4.png" alt="Partner 4" />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-16 w-auto" src="https://cinnamon-pure-oil.vercel.app/Partners/partner7.png" alt="Partner 5" />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-16 w-auto" src="https://cinnamon-pure-oil.vercel.app/Partners/partner5.png" alt="Partner 6" />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-16 w-auto" src="https://cinnamon-pure-oil.vercel.app/Partners/partner8.png" alt="Partner 7" />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-16 w-auto" src="https://cinnamon-pure-oil.vercel.app/Partners/partner6.png" alt="Partner 8" />
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Partners;
