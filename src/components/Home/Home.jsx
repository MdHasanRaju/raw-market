import React from "react";
import ExquisiteService from "./ExquisiteService";
import Banner from "./Banner";
import FoodOffer from "./FoodOffer";
import OfferTimer from "./OfferTimer";

const Home = () => {
  return (
    <>
      <Banner />
      <FoodOffer/>
      <ExquisiteService />
      <OfferTimer/>
    </>
  );
};

export default Home;
