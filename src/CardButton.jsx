import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red, blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  cardButton: {
    color: (props) => (props.value ? red[500] : blue[500])
  }
});

export default function CardButton(props) {
  console.log(props.value);
  const classes = useStyles(props);
  return <Button className={classes.cardButton}>Button </Button>;
}
