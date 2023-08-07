import React from "react";
import Button from "@mui/material/Button";
import Box  from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}}> 
      <Button sx={{my:"20px", bgcolor:"#264143"}} variant="contained">কেমন হয়েছে, বস?
</Button>
    </Box>
  );
};

export default Home;
