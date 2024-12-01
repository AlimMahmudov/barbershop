import React from "react";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Master from "./sections/master/Master";
import Services from "./sections/services/Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Master />
      <Services />
    </div>
  );
};

export default HomePage;
