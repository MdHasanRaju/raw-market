import Box from "@mui/material/Box"; 
import Banner from "../../components/Home/Banner";
import FoodOffer from "../../components/Home/FoodOffer";
import ExquisiteService from "../../components/Home/ExquisiteService";
import OfferTimer from "../../components/Home/OfferTimer";
import Store from "../../components/Home/Store";
import CompanyAdd from "../../components/Home/CompanyAdd";


const Home = () => {
  return (
    <Box sx={{bgcolor:'##E5FFDA'}}> 
      <Banner />
      <FoodOffer/>
      <ExquisiteService />
      <Store />
      <OfferTimer/>
      <CompanyAdd />
    </Box>
  );
};

export default Home;
