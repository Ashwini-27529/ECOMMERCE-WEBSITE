import React from "react";
import Hero from "../Hero/Hero";
import Menus from "../Menus/Menus";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import Banner3 from "../Banner/Banner3";

const Home = () => {
  return (
    <div>
      <Hero />
      <Menus />
      <Banner />
      <Banner2 />
      <Banner3 />
    </div>
  );
};

export default Home;
