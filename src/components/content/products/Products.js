// import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Alert, Grid } from "@mui/material";
import Product from "../product/Product";

const Products = () => {
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <section style={{ padding: "30px 0" }}>
      <Grid container spacing={3}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={product.id}>
                <Product product={product} />
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12}>
            <Alert severity="info">There are no products</Alert>
          </Grid>
        )}
      </Grid>
    </section>
  );
};

export default Products;
