import Box from "@mui/material/Box";
import React from "react";
import Vegetables from "../../components/Products/Vegetables";
import Fruits from "../../components/Products/Fruits";

const Products = () => {
  return (
    <Box>
      <Vegetables />
      <Fruits/>
    </Box>
  );
};

export default Products;
