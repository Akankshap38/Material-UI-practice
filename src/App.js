import React, { useState, useEffect } from "react";
import {
  Paper,
  Button,
  Grid,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (event) => {
    setDarkMode(darkMode ? false : true);
  };

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    },
    typography: {
      h1: {
        fontSize: "3em"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Typography variant="h1">This is my App!</Typography>
          <Button variant="contained" color="primary">
            This is a button
          </Button>
          <Button variant="contained" color="secondary">
            This is another button
          </Button>
        </Grid>

        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={handleChange}
                name="darkModeToggle"
                color="primary"
              />
            }
            label="Switch to Dark Mode"
          />
        </FormGroup>
      </Paper>
    </ThemeProvider>
  );
}
