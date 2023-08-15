import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import React from "react";
import { Box, Divider, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Footer.css";
import VisaCard from "../Svg/VisaCard";
import Paypal from "../Svg/Paypal";
import MasterCard from "../Svg/MasterCard";
import GooglePay from "../Svg/GooglePay";
import AmericanExpress from "../Svg/AmericanExpress";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", pt: 8, pb: 4 }}>
      <Container>
        <Grid container>
          <Grid
            item
            sx={{ textAlign: "start", justifyContent: "start" }}
            xs={12}
            sm={6}
            md={3}
          >
            <Typography variant="h6">Product</Typography>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="subtitle1">
                Lorem Ipsum is simply <br /> dummy of the printing <br /> and
                typesetting industry <br /> lorem Ipsum
              </Typography>

              <Box sx={{ py: 8, display: "flex" }}>
                <Box
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "green !important",
                      cursor: "pointer",
                    },
                  }}
                >
                  <i
                    style={{ paddingRight: "10px", fontSize: "28px" }}
                    class="fa-brands fa-instagram"
                  ></i>
                </Box>
                <Box
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "green !important",
                      cursor: "pointer",
                    },
                  }}
                >
                  <i
                    style={{ paddingRight: "10px", fontSize: "28px" }}
                    class="fa-brands fa-youtube"
                  ></i>
                </Box>
                <Box
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "green !important",
                      cursor: "pointer",
                    },
                  }}
                >
                  <i
                    style={{ paddingRight: "10px", fontSize: "28px" }}
                    class="fa-brands fa-linkedin"
                  ></i>
                </Box>
                <Box
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "green !important",
                      cursor: "pointer",
                    },
                  }}
                >
                  <i
                    style={{ paddingRight: "10px", fontSize: "28px" }}
                    class="fa-brands fa-pinterest"
                  ></i>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={9}>
            <Grid container>
              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h6">SERVICES</Typography>
                <Box>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Fresh fruits
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Fresh meat
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Cow milk
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Haldi powder
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Sea & fish
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h6">PRIVACY & TERMS</Typography>
                <Box>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    {" "}
                    My cart
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Wishlist
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Shipping details
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Help center
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h6">MY ACCOUNT</Typography>
                <Box>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    {" "}
                    About vegist
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Faq's
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Contact us
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    News
                  </Typography>
                  <Typography
                    sx={{ p: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle1"
                  >
                    Store location
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h6">SUBSCRIBE LATEST DEAL</Typography>
                <Box>
                  <Typography variant="subtitle1">
                    Subscribe to our newsletter <br /> to re ceive fashion store
                    news on new update.{" "}
                  </Typography>
                  <Box>
                    <TextField
                      size="small"
                      id="standard-basic"
                      placeholder="example@gmail.com"
                      sx={{
                        mt: 3,
                        bgcolor: "white",
                        '& ::placeholder': { 
                          fontSize:17,
                       },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                          "&:hover fieldset": {
                            border: "none",
                          },
                          "&.Mui-focused fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {/* <SearchIcon sx={{ color: "red" }} /> */}
                            <i
                              style={{
                                color: "green",
                                fontSize: 18,
                              }}
                              class="fa-solid fa-arrow-right"
                            ></i>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider color="white" sx={{ height: 1 }} />
      <Container
        sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
      >
        <Typography variant="body1">© 2023 Theme powered by Bazar</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {/* <i class="fa-brands fa-cc-amex"></i>
                      <i class="fa-brands fa-cc-visa"></i>
                      <i class="fa-brands fa-cc-paypal"></i>
                      <i class="fa-brands fa-cc-mastercard"></i> */}
          <VisaCard />
          <Paypal />
          <MasterCard />
          <AmericanExpress />
          <GooglePay />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
