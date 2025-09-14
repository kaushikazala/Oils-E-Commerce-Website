import Image from "next/image";
import Banner from "./Components/Banner";
import AboutLetter from "./Components/AboutLetter";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import Partners from "./Components/Partners";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
     <Banner/>
    <div className="container mx-auto px-5">
      <AboutLetter/>
      <Products/>
      <AboutUs/>
      <Partners/>
      <Testimonial/>
      <Footer/>
    </div>
    </>
  );
}
