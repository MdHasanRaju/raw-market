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
    <Box sx={{ backgroundColor: "#f6f6f6", color: "#6f6f6f", pt: 8, pb: 4 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ display: { sm: "flex", md: "block" }, gap: "21%" }}>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 3, color: "#232323", fontWeight: "bold" }}
                >
                  PRODUCTS
                </Typography>
                <Typography variant="subtitle2">
                  Lorem Ipsum is simply <br /> dummy of the printing <br /> and
                  typesetting industry <br /> lorem Ipsum
                </Typography>
              </Box>

              <Box sx={{ py: 8, display: "flex" }}>
                <Box
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "#B9E2A7 !important",
                      cursor: "pointer",
                    },
                  }}
                >
                  <i
                    style={{ paddingRight: "10px", fontSize: "28px" }}
                    className="fa-brands fa-instagram"
                  ></i>
                </Box>
                <Box
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "#B9E2A7 !important",
                      cursor: "pointer",
                    },
                  }}
                >
                  <i
                    style={{ paddingRight: "10px", fontSize: "28px" }}
                    className="fa-brands fa-youtube"
                  ></i>
                </Box>
                <Box
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "#B9E2A7 !important",
                      cursor: "pointer",
                    },
                  }}
                >
                  <i
                    style={{ paddingRight: "10px", fontSize: "28px" }}
                    className="fa-brands fa-linkedin"
                  ></i>
                </Box>
                <Box
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "#B9E2A7 !important",
                      cursor: "pointer",
                    },
                  }}
                >
                  <i
                    style={{ paddingRight: "10px", fontSize: "28px" }}
                    className="fa-brands fa-pinterest"
                  ></i>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={9}>
            <Grid container>
              <Grid item md={3} sm={6} xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 3, color: "#232323", fontWeight: "bold" }}
                >
                  SERVICES
                </Typography>
                <Box>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Fresh fruits
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Fresh meat
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Cow milk
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Haldi powder
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Sea & fish
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 3, color: "#232323", fontWeight: "bold" }}
                >
                  PRIVACY & TERMS
                </Typography>
                <Box>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    {" "}
                    My cart
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Wishlist
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Shipping details
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Help center
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 3, color: "#232323", fontWeight: "bold" }}
                >
                  MY ACCOUNT
                </Typography>
                <Box>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    {" "}
                    About vegist
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Faq's
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Contact us
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    News
                  </Typography>
                  <Typography
                    sx={{ mb: { md: 2, sm: 2, xs: 1 } }}
                    variant="subtitle2"
                  >
                    Store location
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 3, color: "#232323", fontWeight: "bold" }}
                >
                  SUBSCRIBE LATEST DEAL
                </Typography>
                <Box>
                  <Typography variant="subtitle2">
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
                        "& ::placeholder": {
                          fontSize: 17,
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
                                color: "black",
                                fontSize: 18,
                              }}
                              className="fa-solid fa-arrow-right"
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
      <Divider color="white" sx={{ height: 1, mt: { xs: 5 } }} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 3 },
          mt: 3,
        }}
      >
        <Typography variant="body1">© 2023 Theme powered by Bazar</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {/* <i className="fa-brands fa-cc-amex"></i>
                      <i className="fa-brands fa-cc-visa"></i>
                      <i className="fa-brands fa-cc-paypal"></i>
                      <i className="fa-brands fa-cc-mastercard"></i> */}
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
