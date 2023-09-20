import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import middleBanner from "../../assets/banners/middle-banner.png";

const ExquisiteService = () => {
  return (
    <Box my={12}>
      <Box>
        <Box>
          <Container>
            <Typography
              sx={{
                typography: { sm: "h5", xs: "h6", md: "h4", lg: "h4" },
                color: "green",
                textAlign: "center",
                mt: 8,
                mb: 6,
              }}
            >
              EXQUISITE SERVICE
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        border: "2px solid #999",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          color: "inherit",
                          "&:hover": {
                            color: "green !important",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                        >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h6">Quality support</Typography>
                      <Typography variant="h6" sx={{ color: "#999" }}>
                        Always online 24/7
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mt: 4,
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        border: "2px solid #999",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          color: "inherit",
                          "&:hover": {
                            color: "green !important",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                        >
                          <rect x="1" y="3" width="15" height="13"></rect>
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                          <circle cx="5.5" cy="18.5" r="2.5"></circle>
                          <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h6">Free delivary</Typography>
                      <Typography variant="h6" sx={{ color: "#999" }}>
                        Orders from all Item
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item md={4}>
                  <Box
                    component="img"
                    sx={{
                      height: 233,
                      width: 350,
                      //   maxHeight: { xs: 233, md: 167 },
                      //   maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={middleBanner}
                  ></Box>
                </Grid>
                <Grid item md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        border: "2px solid #999",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          color: "inherit",
                          "&:hover": {
                            color: "green !important",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h6">Join newsletter</Typography>
                      <Typography variant="h6" sx={{ color: "#999" }}>
                        20% off by subscribing
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mt: 4,
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        border: "2px solid #999",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          color: "inherit",
                          "&:hover": {
                            color: "green !important",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                        >
                          <polyline points="23 4 23 10 17 10"></polyline>
                          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                        </svg>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h6">Return & refund</Typography>
                      <Typography variant="h6" sx={{ color: "#999" }}>
                        Money back guarantee
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default ExquisiteService;
