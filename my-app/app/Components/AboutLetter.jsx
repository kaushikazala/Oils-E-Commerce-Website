import React from "react";

const AboutLetter = () => {
  return (
    <>
    <div className="w-4/5 mx-auto py-10 ">
      <div className="grid grid-cols-8 gap-20 bg-black text-white p-14 rounded-xl items-center shadow-xl cursor-pointer">
        <div className="col-span-4">
          <h1 className="text-4xl">What Does Cinnamon Do To Your Face?</h1>
        </div>
        <div className="col-span-3">
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            laudantium nesciunt minus, possimus sapiente dolore saepe, eum aut
            magnam natus sunt cupiditate quaerat ad aperiam doloremque eos
            voluptatibus accusantium quas!
          </p>
        </div>
        <div className="col-span-1">
            <div className=" bg-[#F26830]  rounded-full hover:bg-black transition-all py-4 px-3 cursor-pointer hover:scale-105 hover:border-2 hover:border-[#F26830]">
           {/* <ArrowRight/> */}
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutLetter;
