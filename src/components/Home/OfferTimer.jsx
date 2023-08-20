import React from "react";
import CountdownTimer from "../../hooks/CountdownTimer";
import { Box } from "@mui/material";

const OfferTimer = () => {
  const THREE_DAYS_IN_MS = 8 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <Box>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </Box>
  );
};

export default OfferTimer;
