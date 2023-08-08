import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Products = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Button
        sx={{
          my: "20px",
          bgcolor: "#264143",
          "&:hover": {
            bgcolor: "red",
          },
        }}
        variant="contained"
      >
        আরে মিয়া প্রোডাক্ট পরে অ্যাড করমু।তা কেমন হয়েছে, বস?
      </Button>
    </Box>
  );
};

export default Products;
