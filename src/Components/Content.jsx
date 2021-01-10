import React from "react";
import CoffeeCard from "./CoffeeCard";
import Grid from "@material-ui/core/Grid";

function Content() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={4}>
        <CoffeeCard />
      </Grid>
    </Grid>
  );
}

export default Content;
