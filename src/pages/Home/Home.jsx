import Box from "@mui/material/Box"; 
import Banner from "../../components/Home/Banner";
import FoodOffer from "../../components/Home/FoodOffer";
import ExquisiteService from "../../components/Home/ExquisiteService";
import OfferTimer from "../../components/Home/OfferTimer";
import Store from "../../components/Home/Store";

const Home = () => {
  return (
    <Box> 
      <Banner />
      <FoodOffer/>
      <ExquisiteService />
      <Store />
      <OfferTimer/>
    </Box>
  );
};

export default Home;
