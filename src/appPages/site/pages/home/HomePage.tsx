import React from "react";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Master from "./sections/master/Master";
import Services from "./sections/services/Services";
import Sertifikat from "./sections/sertifikat/Sertifikat";
import Discount from "./sections/discount/Discount";
import Map from "./sections/map/Map";
import Review from "./sections/review/Review";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Master />
      <Services />
      <Sertifikat />
      <Discount />
      <Review />
      <Map />
    </div>
  );
};

export default HomePage;
