import { Box } from '@mui/material';
import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
    const countDownStyleDanger = {
        display:'flex', 
        color:'white',
        bgcolor:'red'
    }
    const countDownStyleDangerFree = {
        display:'flex', 
        color:'white',
        bgcolor:'black'
    }

  return (
    <Box sx={isDanger ? countDownStyleDanger : countDownStyleDangerFree} >
      <p>{value}</p>
      <span>{type}</span>
    </Box>
  );
};

export default DateTimeDisplay;
