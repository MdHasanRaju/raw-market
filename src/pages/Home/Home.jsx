import React from "react"; 
import Box from "@mui/material/Box";
import HomeComp from "./../../components/Home/Home";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <HomeComp></HomeComp>
    </Box>
  );
};

export default Home;
