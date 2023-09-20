import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import coconut from "../../assets/products/coconut.jpg";
import apple from "../../assets/products/apple.jpg";
import pineapple from "../../assets/products/pineapple.jpg";
import banana from "../../assets/products/banana.jpg";
import vinegar from "../../assets/products/vinegar.jpg";
import tomato from "../../assets/products/tomato.jpg";
import cabbage from "../../assets/products/cabbage.jpg";
import greenCapsicum from "../../assets/products/greenCapsicum.jpg";
import ReactPaginate from "react-paginate";
import "./DiscoverProducts.css";

const DiscoverProducts = () => {
  // const [items, setItems] = useState(productItems);
  // const [data, setData] = useState([])
  const [itemStatus, setItemStatus] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        const slicedItems = data?.products?.slice(0, 8);
        setItems(slicedItems);
        console.log(slicedItems);
      });
  }, []);

  const handleFilterItem = (category) => {
    setItemStatus(category);
  };

  //  decide what to render
  const products = items?.filter((item) => {
    if (itemStatus === "") {
      return true;
    }
    return item.category === itemStatus;
  });

  const activeBtn = {
    bgcolor: "green",
    color: "white",
  };

  const active = (activeStatus) => {
    return itemStatus === activeStatus ? activeBtn : {};
  };

  return (
    <Container sx={{ my: 6 }}>
      <Typography
        sx={{
          typography: { sm: "h4", xs: "h6", md: "h3" },
          textAlign: "center",
          mb: { xs: 3, sm: 6, md: 6 },
          mt: { xs: 16 },
        }}
        variant="h3"
      >
        DISCOVER PRODUCTS
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => handleFilterItem("")}
          variant="outlined"
          color="success"
          size="small"
          sx={{
            ...active(""),
            typography: { xs: "xs", sm: "lg", md: "xl" },
            px: { md: 2, sm: 2, xs: 1 },
            py: { md: 0.5, sm: 0.5, xs: 0.5 },
            mr: 3,

            "&:hover": {
              bgcolor: "green",
              color: "white",
            },
          }}
        >
          All Items
        </Button>
        <Button
          onClick={() => handleFilterItem("vegetables")}
          variant="outlined"
          color="success"
          size="small"
          sx={{
            ...active("vegetables"),
            mr: 3,
            px: { md: 2, sm: 2, xs: 1 },
            py: { md: 0.5, sm: 0.5, xs: 0.5 },
            "&:hover": {
              bgcolor: "green",
              color: "white",
            },
          }}
        >
          Vegetables
        </Button>
        <Button
          onClick={() => handleFilterItem("fruits")}
          variant="outlined"
          color="success"
          size="small"
          sx={{
            ...active("fruits"),
            px: { md: 2, sm: 2, xs: 1 },
            py: { md: 0.5, sm: 0.5, xs: 0.5 },
            "&:hover": {
              bgcolor: "green",
              color: "white",
            },
          }}
        >
          Fruits
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ mt: 3, mb: 8 }}>
        {products?.map((product) => {
          const { title, photoUrl, price, prevPrice, ratings, _id } = product;
          return (
            <Grid key={_id} item md={3} sm={3} sx={{ pl: 0 }} xs={6}>
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "white",
                  position: "relative",
                  cursor: "pointer",
                  border: "1px solid transparent",
                  borderRadius: "2px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover > Button": {
                    zIndex: 10,
                    opacity: 1,
                    display: "block",
                    transform: "translateY(-20%)",
                  },
                }}
              >
                <Box
                  component="img"
                  height="180px"
                  sx={{
                    width: { md: "85%", sm: "100%", xs: "150px" },
                    border: "1px solid transparent",
                    borderRadius: "5px",
                  }}
                  alt="product image"
                  src={photoUrl}
                />{" "}
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    width: "60%",
                    transition: ".5s",
                    opacity: 0,
                    transform: "translateY(20%)",
                  }}
                  color="success"
                >
                  Shop Now
                </Button>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "green" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center", my: 1 }}
                >
                  <Stack sx={{ alignItems: "center" }} spacing={1}>
                    <Rating
                      size="small"
                      name="half-rating-read"
                      defaultValue={ratings}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "center", color: "black", color: "green" }}
                >
                  €{price}.00 <Box component="del">{prevPrice}.00</Box>
                  <Box component="ins"> New</Box>!
                </Typography>
                <></>
              </Box>
            </Grid>
          );
        })}
      </Grid> 
    </Container>
  );
};

export default DiscoverProducts;
