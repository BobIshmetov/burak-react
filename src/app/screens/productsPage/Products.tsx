import React from "react";
import { Box, Button, Container, Icon, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box className="top-text">Burak Restaurant</Box>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                borderRadius: "50px", // Oq panel uchun yumaloqlik
                backgroundColor: "#fff", // Oq fon
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Yengil soya
                width: "370px", // Panel kengligi
                height: "28.54px", // Oq panel balandligi
                marginTop: "7.75px",
              }}
            >
              {/* Kiritish maydoni */}
              <InputBase
                placeholder="Type here"
                sx={{
                  flex: 1, // Kiritish maydoni kengayadi
                  fontSize: "16px", // Shrift kattaligi
                  padding: "0 20px", // Ichki bo‘sh joy
                  color: "#333", // Matn rangi
                  border: "none", // Chegarasiz maydon
                  outline: "none", // Fokus chizig'ini olib tashlash
                }}
              />

              {/* Qidirish tugmasi */}
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px", // Matn va ikon orasidagi bo‘shliq
                  backgroundColor: "#333", // Qora tugma foni
                  color: "#F3C295", // Oltin matn va ikon rang
                  borderRadius: "50px", // Tugmani to‘liq yumaloqlash
                  padding: "15px 15px", // Ichki bo'sh joy (kattaroq tugma uchun)
                  fontWeight: "bold", // Qalin shrift
                  textTransform: "uppercase", // Katta harflar bilan matn
                  height: "28.54px", // Tugma balandligi (oq paneldan kattaroq)
                  marginRight: "0px", // Tugmani oq paneldan tashqariga chiqarish
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Tugma soyasi
                  "&:hover": {
                    backgroundColor: "#555", // Hoverda ochroq qora rang
                  },
                }}
              >
                SEARCH
                <SearchIcon sx={{ fontSize: "24px" }} />
              </Button>
            </Box>
          </Stack>
          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <Button variant={"contained"} color={"secondary"}>
                Other
              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Dessert
              </Button>
              <Button variant={"contained"} color={"secondary"}>
                DrinK
              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Salad
              </Button>
              <Button variant={"contained"} color={"primary"}>
                Dish
              </Button>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className={"product-sale"}>LARGE size</div>
                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>

                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{ color: 20 ? "gray" : "white" }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon />
                          {15}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available!</Box>
              )}
            </Stack>
          </Stack>
          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box className={"review-box"}>
              <img src={"/img/gurme.webp"} />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/seafood.webp"} />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/sweets.webp"} />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/doner.webp"} />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              style={{ marginTop: "60px", marginBottom: "89px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8477.455639147694!2d69.23836446374044!3d41.30379055025327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudCwgT8q7emJla2lzdG9u!5e0!3m2!1suz!2skr!4v1728882082902!5m2!1suz!2skr"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
