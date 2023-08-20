import React from "react";
import ExquisiteService from "./ExquisiteService";
import Banner from "./Banner";
import FoodOffer from "./FoodOffer";
import AddCompany from "./AddCompany";

const Home = () => {
  return (
    <>
      <Banner />
      <FoodOffer />
      <ExquisiteService />
      <AddCompany />
    </>
  );
};

export default Home;
