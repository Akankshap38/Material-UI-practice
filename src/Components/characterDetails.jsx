import React from "react";

export default function CharacterDex(props) {
  console.log(props);
  const charID = props.match.params.charID;
  console.log(charID);
  return <h2>You see details of character with ID {charID}</h2>;
}
