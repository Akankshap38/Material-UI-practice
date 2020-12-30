import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary" size="medium" fullWidth>
        Click me
      </Button>
    </div>
  );
}
