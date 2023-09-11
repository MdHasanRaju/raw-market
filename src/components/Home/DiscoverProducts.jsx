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

const productItems = [
  {
    id: 1,
    title: "Fresh Coconut",
    ratings: 4.5,
    photoUrl: "https://i.ibb.co/jJZ7fFb/coconut.webp",
    image: coconut,
    price: 70,
    prevPrice: 80,
    category: "fruits",
    description:
      "Low in carbs and high in fiber and fat, coconut is a great choice if you’re on a low carb, paleo, or gluten-free diet. It may help promote blood sugar control, contains powerful antioxidants, and also has antibacterial effects.",
  },
  {
    id: 2,
    title: "Fresh Pineapple",
    ratings: 5,
    photoUrl: "https://i.ibb.co/jbFJm8L/pineapple.webp",
    image: pineapple,
    price: 50,
    prevPrice: 60,
    category: "fruits",
    description:
      "Bromelain, the digestive enzyme in pineapple, has anti-inflammatory and pain-relieving properties. This helps when you have an infection, like sinusitis, or an injury, like a sprain or burn. It also offsets the joint pain of osteoarthritis. The vitamin C in pineapple juice also keeps inflammation levels low.",
  },
  {
    id: 3,
    title: "Fresh Tomato",
    ratings: 4.5,
    photoUrl: "https://i.ibb.co/H72ftNj/tomato.jpg",
    image: tomato,
    price: 80,
    prevPrice: 100,
    category: "vegetables",
    description:
      "Tomatoes are low in calories and provide important nutrients like vitamin C and potassium. They're also rich in antioxidants—one called lycopene, responsible for tomatoes' characteristic color, is linked to several benefits, such as a reduced risk of heart disease and certain cancers.",
  },
  {
    id: 4,
    title: "Fresh Green Capsicum",
    ratings: 3,
    photoUrl: "https://i.ibb.co/hLKwW45/green-Capsicum.webp",
    image: greenCapsicum,
    price: 50,
    prevPrice: 60,
    category: "vegetables",
    description:
      "Capsicum may help in managing blood glucose, dyslipidemia, cancers, and healing wounds. Additionally, it may help in boosting immunity, metabolism, preventing cataracts, and may provide symptomatic relief in arthritis, Crohn's disease and yellow fever.",
  },
  {
    id: 5,
    title: "Fresh Cabbage",
    ratings: 4.5,
    photoUrl: "https://i.ibb.co/dfYVfJB/cabbage.webp",
    image: cabbage,
    price: 50,
    prevPrice: 70,
    category: "vegetables",
    description:
      "The key ingredients, of course, are cabbage and green peppers. If available, toss in some red, yellow and orange bell peppers for an eye-popping colorful salad. Many recipes call for one-half cup or so of grated carrots, chopped celery, onion, or a teaspoon of celery seed. Keep these variations in mind when you toss up your own special Pepper Cabbage.",
  },
  {
    id: 6,
    title: "Fresh Banana",
    ratings: 5,
    photoUrl: "https://i.ibb.co/7bCVSTV/banana.webp",
    image: banana,
    price: 10,
    prevPrice: 15,
    category: "fruits",
    description:
      "Bananas contain essential nutrients that may enhance heart health, help manage blood pressure, and boost a person's mood, among other benefits. Eating bananas can help lower blood pressure and may reduce the risk of cancer.",
  },
  {
    id: 7,
    title: "Fresh Apple",
    ratings: 5,
    photoUrl: "https://i.ibb.co/z6bTmYw/apple.webp",
    image: apple,
    price: 130,
    prevPrice: 150,
    category: "fruits",
    description:
      "Not only do apples taste delicious on their own or when added to dishes, but they come loaded with health benefits. “Apples have been linked to numerous health benefits, including improved gut health and reduced risk of stroke, high blood pressure, diabetes, heart disease, obesity, and some cancers.",
  },
  {
    id: 8,
    title: "Fresh Vinegar",
    ratings: 2.5,
    photoUrl: "https://i.ibb.co/zmsDFfg/vinegar.jpg",
    image: vinegar,
    price: 70,
    prevPrice: 90,
    category: "juice",
    description:
      "Vinegar contains polyphenols, plant chemicals that have an antioxidant effect that may protect cells from oxidative stress, a possible stimulator of tumor growth. Cell and mouse studies suggest that vinegar may prevent the growth of cancer cells or cause tumor cells to die.",
  },
  {
    id: 9,
    title: "Fresh Onion",
    ratings: 4,
    photoUrl: "https://i.ibb.co/QcF68w2/onion.webp",
    image: vinegar,
    price: 60,
    prevPrice: 80,
    category: "vegetables",
    description:
      "Raw onion is an essential ingredient found in most cuisines all over the world. Notably, onion comes in various colours such as yellow, white, and red. It is a popular vegetable due to its unique flavour and nutritious content.",
  },
  {
    id: 10,
    title: "Fresh Watermelon ",
    ratings: 5,
    photoUrl: "https://i.ibb.co/WpFQr1F/watarmelon.webp",
    image: vinegar,
    price: 90,
    prevPrice: 100,
    category: "fruits",
    description:
      "The cheery red color comes from lycopene, an antioxidant. Studies show it may help curb your risk of cancer and diabetes as part of a healthy lifestyle. Watermelon has more of this nutrient than any other fruit or veggie -- even tomatoes.",
  },
  {
    id: 11,
    title: "Fresh Strawberry",
    ratings: 3,
    photoUrl: "https://i.ibb.co/Zck3Pyd/strawberry.webp",
    image: vinegar,
    price: 120,
    prevPrice: 150,
    category: "fruits",
    description:
      "Strawberries are rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like cancer, diabetes, stroke, and heart disease. It's also an excellent source of: Magnesium. Phosphorous.",
  },
  {
    id: 12,
    title: "Fresh Wiki",
    ratings: 2,
    photoUrl: "https://i.ibb.co/10bYhrT/wiki.webp",
    image: vinegar,
    price: 120,
    prevPrice: 130,
    category: "fruits",
    description:
      "The outer layer, often edible, of most fruits is called the pericarp. Typically formed from the ovary, it surrounds the seeds; in some species, however, other structural tissues contribute to or form the edible portion.",
  },
  {
    id: 13,
    title: "Fresh Brocoli",
    ratings: 4,
    photoUrl: "https://i.ibb.co/ncRTcYp/brocoli.webp",
    image: vinegar,
    price: 90,
    prevPrice: 120,
    category: "vegetables",
    description:
      "Broccoli contains many vitamins, minerals, fiber, and antioxidants. Broccoli’s benefits include helping reduce inflammation, keeping blood sugar stable, and strengthening the immune system.",
  },
  {
    id: 14,
    title: "Fresh Carrot",
    ratings: 3,
    photoUrl: "https://i.ibb.co/HrW3mDf/carrot-jpgj.jpg",
    image: vinegar,
    price: 30,
    prevPrice: 40,
    category: "vegetables",
    description:
      "Carrots contain many nutrients, including beta carotene and antioxidants, that may support your overall health as part of a nutrient-rich die.",
  },
  {
    id: 15,
    title: "Fresh Grapes",
    ratings: 5,
    photoUrl: "https://i.ibb.co/fCrqNR4/graps.webp",
    image: vinegar,
    price: 130,
    prevPrice: 150,
    category: "fruits",
    description:
      "Grapes are a juicy, delicious snack that can provide you with a variety of health benefits. Grapes are rich in nutrients, boost your immunity, provide antioxidants, promote better sleeps, improve the heath of your heart, protect your eyes, and keep you well hydrated.",
  },
  {
    id: 16,
    title: "Fresh Lemon",
    ratings: 4,
    photoUrl: "https://i.ibb.co/2PtPzBc/lemon.webp",
    image: vinegar,
    price: 10,
    prevPrice: 20,
    category: "fruits",
    description:
      "Lemons contain nutrients that may help support your cardiovascular health and protect against kidney stones and anemia, among other benefits.",
  },
  {
    id: 17,
    title: "Fresh Mango",
    ratings: 5,
    photoUrl: "https://i.ibb.co/zNRtwgq/mango.webp",
    image: vinegar,
    price: 60,
    prevPrice: 80,
    category: "fruits",
    description:
      "The mango, a tropical fruit with hundreds of varieties has been named 'the king of fruits,'' and with good reason The mango is scientifically known as Mangifera indica L., is luscious, sweet, and fragrant, and packed with nutrients like vitamins A and C.",
  },
  {
    id: 17,
    title: "Fresh Big Capsicum",
    ratings: 3,
    photoUrl: "https://i.ibb.co/hLKwW45/green-Capsicum.webp",
    image: vinegar,
    price: 110,
    prevPrice: 120,
    category: "vegetables",
    description:
      "Capsicum may help in managing blood glucose, dyslipidemia, cancers, and healing wounds. Additionally, it may help in boosting immunity, metabolism, preventing cataracts, and may provide symptomatic relief in arthritis, Crohn's disease and yellow fever.",
  },
  {
    id: 18,
    title: "Fresh Bin",
    ratings: 5,
    photoUrl: "https://i.ibb.co/p281L2q/bin.jpg",
    image: vinegar,
    price: 90,
    prevPrice: 100,
    category: "vegetables",
    description:
      "Bin weighing systems weigh the precise weight of wastes collected from wheeled bin containers to accuracies of 0.5 kilograms for two wheeled bins and 2 Kilograms for trade containers. Without having to stop the lifter, each lifting chair is installed with a weighing loadcell and weighs two different bins independently and simultaneously.",
  },
  {
    id: 19,
    title: "Fresh Almond",
    ratings: 5,
    photoUrl: "https://i.ibb.co/vxnCRKz/almond.webp",
    image: vinegar,
    price: 120,
    prevPrice: 150,
    category: "fruits",
    description:
      "Almonds are rich in important nutrients for your body, including magnesium, vitamin E, and fiber. Almonds have both calcium and phosphorus, which are good for bone health. Almonds seem to help curb blood sugar spikes after meals, which is key for people with diabetes.",
  },
];

const DiscoverProducts = () => {
  // const [items, setItems] = useState(productItems);
  const [itemStatus, setItemStatus] = useState("");
  const [data, setData] = useState([])
  const [items, setItems] = useState(data);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products);  
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

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
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
        {currentItems?.map((product) => {
          const { title, photoUrl, price, prevPrice, ratings, _id } = product; 
          return (
            <Grid key={_id} item md={3} sm={4} sx={{ pl: 0 }} xs={6}>
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "white",
                  position: "relative",
                  cursor: "pointer",
                  border: "1px solid transparent",
                  borderRadius: "2px",
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
                    width: { md: "100%", sm: "100%", xs: "150px" },
                    border: "1px solid transparent",
                    borderRadius: "5px",
                  }}
                  alt="product image"
                  // src={image}
                  src={photoUrl}
                />{" "}
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
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
  );
};

export default DiscoverProducts;
