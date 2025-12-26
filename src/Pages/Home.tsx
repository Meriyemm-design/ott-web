import React from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import Faq from "../components/Faq";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <Faq />
      <Pricing />
    </>
  );
};

export default Home;
