import React from "react";
import "./styles.css";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  myStyle: {
    backgroundColor: "yellow",
    fontStyle: "oblique",
    color: "brown",
    fontWeight: "bolder"
  }
});
export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Button variant="contained" color="primary" size="medium" fullWidth>
        Click me
      </Button>
      <Typography variant="h3" color="secondary">
        Hello World
      </Typography>
      <Button
        style={{ marginTop: "10px" }}
        variant="outlined"
        color="secondary"
        size="medium"
      >
        Click me
      </Button>

      <Typography className={classes.myStyle}>Make style hook</Typography>
    </div>
  );
}
