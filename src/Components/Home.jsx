import React, { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import About from "./About";
import Contact from "./Contact";

export default function Home(props) {
  console.log(props.match.params.page);

  const [TabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={TabValue}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="About" />
          <Tab label="Contact Us" />
        </Tabs>
      </AppBar>
      {TabValue === 0 && <About />}
      {TabValue === 1 && <Contact />}
    </>
  );
}
