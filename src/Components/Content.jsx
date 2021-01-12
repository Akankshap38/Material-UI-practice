import React from "react";
import CoffeeCard from "./CoffeeCard";
import {Grid} from "@material-ui/core";
import foods from "../foods";

function Content() {
  return (
    <Grid container spacing={2}>
      {foods.map((element) => {
        return (
          <Grid item xs={12} sm={6} md={4} spacing={2}>
            <CoffeeCard data={element} />;
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Content;
