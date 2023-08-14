import { Box } from "@mui/system";
import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import offerImg from "../../assets/banners/offer-image.jpg";
import videoBanner from "../../assets/banners/video-banner.jpg";
import { Link } from "react-router-dom";

const FoodOffer = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid width="50%" item md={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{ width: "100%" }}
              component="img"
              src={offerImg}
              alt="offer food image"
            />
            <Box sx={{ position: "absolute", top: "30%", right: "8%" }}>
              <Typography variant="body1">GET UP TO 30% OFF</Typography>
              <Typography
                sx={{ mt: 1, mb: 3, fontWeight: "bold" }}
                variant="h5"
              >
                BRUSSELS foods
              </Typography>
              
              <Button
                variant="outlined"
                sx={{
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
          </Box>
        </Grid>

        <Grid width="50%" md={6}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{ width: "100%" }}
              component="img"
              alt="video banner image"
              src={videoBanner}
            >
            </Box>
            <Box
              sx={{
                bgcolor: "green",
                position: "absolute",
                border: "1px solid transparent",
                borderRadius: "50%",
                top: "40%",
                right: "41%",
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/https://www.youtube.com/watch?v=0etCKCAsImI">
                <i
                  style={{ fontSize: "40px", color: "orange" }}
                  class="fa-solid fa-play"
                ></i>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodOffer;
