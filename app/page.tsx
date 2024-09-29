"use client";

// components
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Testimonial from "@/components/Testimonial";
import Trial from "@/components/Trial";

// implement lenis smooth scroll
// ts error修正参考: https://www.cnblogs.com/konghaowei/p/14078764.html
import { ReactLenis } from "lenis/dist/lenis-react";

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        <Testimonial />
        <Trial />
        {/* temporary div */}
        {/* <div className="h-[8000px]"></div> */}
      </ReactLenis>
    </>
  );
};

export default Home;
