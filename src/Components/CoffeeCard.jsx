import React from "react";
import { makeStyles, CardHeader, Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import { purple, red } from "@material-ui/core/colors";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  avatar: {
    backgroundColor: red[500]
  },
  buttonStyle: {
    borderColor: purple[500],
    color: purple[500],
    fontWeight: "bold"
  }
});

function CoffeeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="food" className={classes.avatar}>
            <FastfoodIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" className={classes.buttonStyle}>
          BUY NOW
        </Button>
        <Button variant="outlined" className={classes.buttonStyle}>
          OFFER
        </Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
