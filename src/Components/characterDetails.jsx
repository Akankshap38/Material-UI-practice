import React, { useEffect, useState } from "react";
import axios from "axios";
import { getRouteName } from "./characters";

export default function CharacterDex(props) {
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
  return <h2>You see details of character with ID {charID}</h2>;
}
