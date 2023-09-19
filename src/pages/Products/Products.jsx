import Box from "@mui/material/Box";
import React from "react";
import Vegetables from '../../components/Products/Vegetables';

const Products = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Vegetables />
    </Box>
  );
};

export default Products;
