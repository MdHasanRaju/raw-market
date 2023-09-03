import React, { useState } from "react";
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

const productItems = [
  {
    id: 1,
    title: "Fresh Coconut",
    ratings: 3.5,
    link: "https://best-hospitals-in-bangladesh.web.app/",
    image: coconut,
    price: 72,
    prevPrice: 80,
    category: "fruits",
    description: "This is created by react JS. it is one of my assignments.",
  },
  {
    id: 2,
    title: "Fresh Pineapple",
    ratings: 5,
    link: "https://explore-new-worlds-with-us.web.app/",
    image: pineapple,
    price: 85,
    prevPrice: 90,
    category: "fruits",
    description: "This is created by React. it is one of my assignments.",
  },
  {
    id: 3,
    title: "Fresh Tomato",
    ratings: 2.5,
    link: "https://assignment-12-76cbb.web.app/",
    image: tomato,
    price: 69,
    prevPrice: 75,
    category: "vegetables",
    description: "This is created by React. it is one of my assignments.",
  },
  {
    id: 4,
    title: "Fresh Capsicum",
    ratings: 6,
    link: "https://earnest-mandazi-16ad1a.netlify.app/",
    image: greenCapsicum,
    price: 78,
    prevPrice: 80,
    category: "vegetables",
    description: "This is created by react JS. it is one of my assignments.",
  },
  {
    id: 5,
    title: "Fresh Cabbage",
    ratings: 3.5,
    link: "https://final-space-website.web.app/",
    image: cabbage,
    price: 60,
    prevPrice: 70,
    category: "vegetables",
    description: "This is created by react JS. it is one of my assignments.",
  },
  {
    id: 6,
    title: "Fresh Banana",
    ratings: 3,
    link: "https://mdhasanraju.github.io/job-project-1/index.html",
    image: banana,
    price: 50,
    prevPrice: 65,
    category: "fruits",
    description: "This is created by JavaScript. it is one of my assignments.",
  },
  {
    id: 7,
    title: "Fresh Apple",
    ratings: 4,
    link: "https://mdhasanraju.github.io/project-2/",
    image: apple,
    price: 40,
    prevPrice: 50,
    category: "fruits",
    description: "This is created by HTML-CSS. it is one of my assignments.",
  },
  {
    id: 8,
    title: "Fresh Juice",
    ratings: 2.5,
    link: "https://mdhasanraju.github.io/job-project-1/second-page.html",
    image: vinegar,
    price: 90,
    prevPrice: 95,
    category: "juice",
    description: "This is created by JavaScript. it is one of my assignments.",
  },
];

const DiscoverProducts = () => {
  const [items, setItems] = useState(productItems);
  const [itemStatus, setItemStatus] = useState("");

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
      <Typography sx={{ textAlign: "center", mb: 6 }} variant="h3">
        Discover products
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => handleFilterItem("")}
          variant="outlined"
          color="success"
          sx={{
            ...active(""),
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
          sx={{
            ...active("vegetables"),
            mr: 3,
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
          sx={{
            ...active("fruits"),
            mr: 3,
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
          const { title, image, price, prevPrice, ratings, id } = product;
          return (
            <Grid key={id} item md={3} sm={4} xs={6}>
              <Box>
                <Box
                  component="img"
                  height="200px"
                  sx={{ width: { md: "100%", sm: "100%", xs: "150px" } }}
                  alt="product image"
                  src={image}
                />
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "green" }}
                >
                  {title}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                  <Stack sx={{ alignItems: "center" }} spacing={1}>
                    <Rating
                      size="medium"
                      name="half-rating-read"
                      defaultValue={ratings}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "center", color: "black" }}
                >
                  €{price} <Box component="del">{prevPrice}.00</Box>
                  <Box component="ins"> New</Box>!
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default DiscoverProducts;
