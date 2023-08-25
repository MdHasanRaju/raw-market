import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
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
    ratings: 4,
    link: "https://best-hospitals-in-bangladesh.web.app/",
    image: coconut,
    category: "fruits",
    description: "This is created by react JS. it is one of my assignments.",
  },
  {
    id: 2,
    title: "Fresh Pineapple",
    ratings: 4,
    link: "https://explore-new-worlds-with-us.web.app/",
    image: pineapple,
    category: "fruits",
    description: "This is created by React. it is one of my assignments.",
  },
  {
    id: 3,
    title: "Fresh Tomato",
    ratings: 4,
    link: "https://assignment-12-76cbb.web.app/",
    image: tomato,
    category: "vegetables",
    description: "This is created by React. it is one of my assignments.",
  },
  {
    id: 4,
    title: "Fresh Capsicum",
    ratings: 4,
    link: "https://earnest-mandazi-16ad1a.netlify.app/",
    image: greenCapsicum,
    category: "vegetables",
    description: "This is created by react JS. it is one of my assignments.",
  },
  {
    id: 5,
    title: "Fresh Cabbage",
    ratings: 4,
    link: "https://final-space-website.web.app/",
    image: cabbage,
    category: "vegetables",
    description: "This is created by react JS. it is one of my assignments.",
  },
  {
    id: 6,
    title: "Fresh Banana",
    ratings: 4,
    link: "https://mdhasanraju.github.io/job-project-1/index.html",
    image: banana,
    category: "fruits",
    description: "This is created by JavaScript. it is one of my assignments.",
  },
  {
    id: 7,
    title: "Fresh Apple",
    ratings: 4,
    link: "https://mdhasanraju.github.io/project-2/",
    image: apple,
    category: "fruits",
    description: "This is created by HTML-CSS. it is one of my assignments.",
  },
  {
    id: 8,
    title: "Fresh Juice",
    ratings: 4,
    link: "https://mdhasanraju.github.io/job-project-1/second-page.html",
    image: vinegar,
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

  return (
    <Box sx={{ my: 6 }}>
      <Typography sx={{ textAlign: "center", mb: 4 }} variant="h3">
        Discover product
      </Typography>
      <Box
        onClick={() => setItems(productItems)}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          onClick={() => handleFilterItem("")}
          variant="outlined"
          color="success"
          sx={{
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
      <Grid container spacing={2}>
        {products?.map((item) => {
          const { title, image, ratings, category, id } = item;
          return (
            <Grid key={id} item md={3}>
              <Box component="span">{title}</Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DiscoverProducts;
