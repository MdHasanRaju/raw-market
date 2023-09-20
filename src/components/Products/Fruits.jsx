import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ReactPaginate from "react-paginate";

const Fruits = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/fruits")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.fruits);
      });
  }, []);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const slicedProducts = data?.slice(itemOffset, endOffset);
    setCurrentItems(slicedProducts);
    const countedPage = Math.ceil(data.length / itemsPerPage);
    setPageCount(countedPage);
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              typography: { sm: "h4", xs: "h6", md: "h4", lg: "h3" },
              textAlign: "center",
              mb: { xs: 3, sm: 3, md: 3 },
              mt: { xs: 5, md: 4, sm: 4 },
              color: "green",
              width: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            FRUITS
            <Divider
              sx={{
                width: "100%",
                fontWeight: "bold",
                borderBottomWidth: 2,
                bgcolor: "green",
              }}
            />
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 8 }}>
          {currentItems?.map((product) => {
            const { title, photoUrl, price, prevPrice, ratings, _id } = product;
            return (
              <Grid key={_id} item md={4} sm={4} sx={{ pl: 0 }} xs={6}>
                <Box
                  sx={{
                    bgcolor: "white",
                    // position: "relative",
                    cursor: "pointer",
                    border: "1px solid transparent",
                    borderRadius: "2px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
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
                    height="200px"
                    sx={{
                      width: {
                        lg: "85%",
                        md: "85%",
                        sm: "85%",
                        xs: "150px",
                      },
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
                      display: "block",
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
        <Container>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        </Container>
      </Container>
    </Box>
  );
};

export default Fruits;
