import { Container, Grid } from "@mui/material";

import Filter from "../filter/Filter";
import Content from "../content/Content";

const Main = () => {
  return (
    <main>
      <Container fixed>
        <Grid container>
          <Filter />
          <Content />
        </Grid>
      </Container>
    </main>
  );
};

export default Main;
