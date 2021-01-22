import React from "react";
import { Route, Switch } from "react-router-dom";

import HPdex from "./Components/characters";
import CharacterDex from "./Components/characterDetails";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <HPdex {...props} />} />
        <Route
          exact
          path="/:charID"
          render={(props) => <CharacterDex title="hello" {...props} />}
        />
      </Switch>
    </div>
  );
}
