import React from "react"; 
import { Box, Button, Typography } from "@mui/material";
import timerBanner from "../../assets/banners/timer-banner.jpg";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${timerBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: {
          md: "cover",
          sm: "center",
          xs: "cover",
        },
        height: {
          md: "80vh",
          // sm: "100vh",
          // xs: "100vh",
        },
        width: "100%",
      }}
      className="show-counter"
    >
      <Box sx={{p:4}}>
        <Typography
          variant="body1"
          sx={{ color: "green", textAlign: "center" }}
        >
          We offer a hot deal offer every festival
        </Typography>
        <Typography variant="h6" sx={{ color: "black", textAlign: "center" ,mt:1, mb:4}}>
          Deal of the day!
        </Typography>

        <Box sx={{ display: "flex" , flexDirection:{xs:'column', sm:'row', md:'row'}}}>
          <Box
            sx={{
              display: "flex",
              flexDirection:{sm:'row',xs:'column',md:'row'},
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100px"
              height="100px"
              bgcolor="green"
              border="1px solid transparent"
              borderRadius="10px"
              color="white"
            >
              <Typography variant="h5">DAY</Typography>
              <Typography variant="h6" sx={days <=3 && {color:'red'}}>{days}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: 24 }}>
              :
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection:{sm:'row', xs:'column', md:'row'},
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100px"
              height="100px"
              bgcolor="green"
              border="1px solid transparent"
              borderRadius="10px"
              color="white"
            >
              <Typography variant="h5">HRS</Typography>
              <Typography variant="h6">{hours}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: 24 }}>
              :
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection:{sm:'row',xs:'column',md:'row'},
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100px"
              height="100px"
              bgcolor="green"
              border="1px solid transparent"
              borderRadius="10px"
              color="white"
            >
              <Typography variant="h5">MIN</Typography>
              <Typography variant="h6">{minutes}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: 24 }}>
              :
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection:{sm:'row',xs:'column',md:'row'},
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100px"
              height="100px"
              bgcolor="green"
              border="1px solid transparent"
              borderRadius="10px"
              color="white"
            >
              <Typography variant="h5">SEC</Typography>
              <Typography variant="h6">{seconds}</Typography>
            </Box>
             
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            display: "flex",
            mx: "auto",
            my: 4,
            "&:hover": {
              outline: "none",
              bgcolor: "green",
              color: "white",
            },
          }}
          color="success"
        >
          Shop Now
        </Button>
      </Box>

      {/* <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a> */}
    </Box>
  );
};

export default ShowCounter;
