import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addToWishList,
  removeFromWishList,
} from "../../../redux/actions/wishList";

import { addToCart, removeFromCart } from "../../../redux/actions/cart";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  ToggleButton,
} from "@mui/material";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "@emotion/styled";

const Product = ({ product }) => {
  const { name, image, oldPrice, price, vendorCode, id } = product;

  const CartItem = styled(ToggleButton)(({ theme }) => ({
    width: "36px",
    height: "36px",
    backgroundColor: cartSelected ? theme.palette.mainColor.main : "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    hover: {
      backgroundColor: "none",
      transition: "all 1s",
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.mainColor.main,
      color: "#fff",
      transition: "all 1s",
    },
  }));

  const WishItem = styled(ToggleButton)(({ theme }) => ({
    position: "absolute",
    top: "16px",
    right: "16px",
    width: "36px",
    height: "36px",
    backgroundColor: wishListSelected ? theme.palette.mainColor.main : "#fff",
    border: "1px solid #f3f3f3",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    hover: {
      backgroundColor: "none",
      transition: "all 1s",
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.mainColor.main,
      color: "#fff",
      transition: "all 1s",
    },
  }));

  const dispatch = useDispatch();

  const handleAddToWishList = (id) => {
    if (wishListSelected) {
      dispatch(removeFromWishList(id));
    } else {
      dispatch(addToWishList(id));
    }
  };

  const handleAddToCart = (id, price) => {
    if (cartSelected) {
      dispatch(removeFromCart(id, price));
    } else {
      dispatch(addToCart(id, price));
    }
  };

  const [cartSelected, setCartSelected] = useState(false);
  const [wishListSelected, setWishListSelected] = useState(false);

  return (
    <Card sx={{ boxShadow: "none", border: "1px solid #f3f3f3" }}>
      <div style={{ position: "relative" }}>
        <WishItem
          value="check"
          selected={wishListSelected}
          onChange={() => {
            setWishListSelected(!wishListSelected);
          }}
          onClick={() => handleAddToWishList(id)}
        >
          <FavoriteBorderIcon fontSize="small" />
        </WishItem>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
          style={{ borderBottom: "1px solid #f3f3f3", objectFit: "contain" }}
        />
      </div>
      <CardContent style={{ paddingBottom: "0" }}>
        <Typography gutterBottom variant="body2" color="#aaa">
          Vendor code: {vendorCode}
        </Typography>
        <Typography sx={{ height: "48px" }} variant="body1" fontWeight="bold">
          {name}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          padding: "8px 16px",
          display: "block",
        }}
      >
        <Typography gutterBottom variant="body2" color="#aaa">
          Price:
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              {price} $
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="#aaa"
              marginBottom={"0px"}
              marginLeft={"5px"}
              style={{
                textDecoration: "line-through",
              }}
            >
              {oldPrice} $
            </Typography>
          </div>
          <CartItem
            value="check"
            selected={cartSelected}
            onChange={() => {
              setCartSelected(!cartSelected);
            }}
            onClick={() => handleAddToCart(id, price)}
          >
            <LocalMallIcon fontSize="small" />
          </CartItem>
        </div>
      </CardActions>
    </Card>
  );
};

export default Product;
