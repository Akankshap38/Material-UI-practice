import React, { useEffect, useState } from "react";
import axios from "axios";
import { getRouteName } from "./characters";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(25),
    height: theme.spacing(35)
  },
  emoji: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  attributeStyle: {
    fontFamily: "Pacifico",
    fontStyle: "cursive",
    fontSize: "30px",
    align: "center",
    color: "#ffdf91"
  }
}));

export default function CharacterDex(props) {
  const classes = useStyles();
  const [charProps, setCharProps] = useState({});
  const charID = props.match.params.charID;
  useEffect(() => {
    axios
      .get("https://hp-api.herokuapp.com/api/characters")
      .then((response) => {
        console.log(response.data);
        for (var i = 0; i < response.data.length; i++) {
          var element = response.data[i];
          console.log(element);
          console.log(getRouteName(element.name));
          if (getRouteName(element.name) === charID) {
            setCharProps({
              name: element.name,
              house: element.house,
              yob:
                element.yearOfBirth === "" ? "Not known" : element.yearOfBirth,
              dob:
                element.dataOfBirth || element.dataOfBirth !== ""
                  ? element.dataOfBirth
                  : "Not known",
              aliveState: element.alive ? element.alive : "Not known",
              sprit: element.image,
              patronus: element.species === "human" ? element.patronus : "NA",
              species: element.species,
              ancestry: element.ancestry
            }); //object closing
            break;
          } //if closing
        } //for loop closing
      }); //then closing
  }, []);
  // console.log(charProps);

  // to print:
  // name, house, dob, alive Status, images, patronus, species, ancestory
  return (
    <Grid
      container
      spacing={1}
      justify="center"
      className={classes.attributeStyle}
    >
      <Grid item xs={12} align="center">
        <h3
          style={{
            fontFamily: "Kaushan Script",
            fontStyle: "cursive",
            fontSize: "50px",
            color: "#eff7e1"
          }}
        >
          {charProps.name}
        </h3>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        style={{ paddingTop: "30px", paddingLeft: "10%" }}
      >
        <Avatar
          alt={charProps.name}
          src={charProps.sprit}
          className={classes.large}
        />
      </Grid>

      <Grid
        item
        direction="column"
        alignItems="center"
        justify="flex-start"
        spacing={2}
        xs={12}
        sm={7}
      >
        <Grid item container>
          <Grid item xs={6}>
            <p>House </p>
          </Grid>
          <Grid item>
            <p>{charProps.house}</p>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <p>Date of Birth</p>
          </Grid>
          <Grid item>
            <p>{charProps.dob ? charProps.dob : charProps.yob}</p>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <p>Patronous</p>
          </Grid>
          <Grid item>
            <p>{charProps.patronus ? charProps.patronus : "Not known"}</p>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <p>Ancestory</p>
          </Grid>
          <Grid item>
            <p>{charProps.ancestry ? charProps.ancestry : "Not known"}</p>
          </Grid>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs={6}>
            <p>Alive Status</p>
          </Grid>
          <Grid item>
            <p style={{ fontSize: "22px" }}>
              {charProps.aliveState === true ? (
                <span role="img" aria-label="sheep" className={classes.emoji}>
                  🙂 Alive
                </span>
              ) : (
                <span role="img" aria-label="sheep" className={classes.emoji}>
                  ⚰️ Dead
                </span>
              )}
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
