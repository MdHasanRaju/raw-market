import { Box, Typography } from "@mui/material";
import React from "react";

const ExpiredNotice = () => {
  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", color: "red" }}>
        Expired!!!
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", fontSize: 24, mt: 3 }}
      >
        Please select a future date and time.
      </Typography>
    </Box>
  );
};

export default ExpiredNotice;
