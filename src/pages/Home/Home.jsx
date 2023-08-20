import Box from "@mui/material/Box"; 
import Banner from "../../components/Home/Banner";
import FoodOffer from "../../components/Home/FoodOffer";
import ExquisiteService from "../../components/Home/ExquisiteService";
import OfferTimer from "../../components/Home/OfferTimer";

const Home = () => {
  return (
    <Box> 
      <Banner />
      <FoodOffer/>
      <ExquisiteService />
      <OfferTimer/>
    </Box>
  );
};

export default Home;
