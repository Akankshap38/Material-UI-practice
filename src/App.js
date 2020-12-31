import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary" size="medium" fullWidth>
        Click me
      </Button>

      <Button
        style={{ marginTop: "10px" }}
        variant="outlined"
        color="secondary"
        size="medium"
      >
        Click me
      </Button>
    </div>
  );
}
