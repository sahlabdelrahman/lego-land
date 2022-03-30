import { useEffect, useState } from "react";
import { Grid, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { filterByPrice } from "../../../redux/actions/products.action";

const Price = () => {
  const [price, setPrice] = useState([0, 900]);
  const minDistance = 100;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByPrice(price));
  }, [dispatch, price]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondaryColor.main,
    padding: "2px",
    color: theme.palette.textColor.main,
  }));

  const Price = styled("span")(({ theme }) => ({
    // ...theme.typography.button,
    color: "#000",
    padding: "4px 8px",
  }));

  return (
    <div>
      <h6>Price</h6>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            From
            <Price>{price[0]}</Price>$
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            Up to
            <Price>{price[1]}</Price>$
          </Item>
        </Grid>
      </Grid>
      <Slider
        getAriaLabel={() => "Price range"}
        value={price}
        min={0}
        max={900}
        step={100}
        onChange={handleChange}
        disableSwap
        size="small"
        color="mainColor"
        style={{ margin: "5px 0 0 0" }}
      />
    </div>
  );
};

export default Price;
