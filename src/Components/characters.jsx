import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#583d72"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontFamily: "Potta One",
    fontStyle: "cursive",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#583d72",
    "&:hover": {
      backgroundColor: "#a685e2"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  charContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px"
  }
}));

function getCharCard(cardDetails) {
  return (
    <Grid item xs={4}>
      {cardDetails.name}
    </Grid>
  );
}
export default function HPdex() {
  const classes = useStyles();
  const [charData, setCharData] = useState([]);
  useEffect(() => {
    const accumulator = [];
    axios.get("https://hp-api.herokuapp.com/api/characters").then((res) => {
      res.data.forEach((element, index) => {
        accumulator[index + 1] = {
          id: index + 1,
          name: element.name,
          house: element.house,
          yob: element.yearOfBirth === "" ? "Not known" : element.yearOfBirth,
          dob:
            element.dataOfBirth || element.dataOfBirth !== ""
              ? element.dataOfBirth
              : "Not known",
          aliveState: element.alive ? element.alive : "Not known",
          spirit: element.image,
          patronus: element.species === "human" ? element.patronus : "NA",
          species: element.species,
          ancestry: element.ancestry
        };
      });
      setCharData(accumulator);
    });
  }, []);
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            HP Wiki <FlashOnIcon style={{ color: "#fecd1a" }} />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} className={classes.charContainer}>
        {charData.map((element, index) => {
          return (
            <Grid item xs={4}>
              {getCharCard(element)}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
