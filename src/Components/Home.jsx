import React, { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import About from "./About";
import Contact from "./Contact";

export default function Home(props) {
  const tabNametoIndex = {
    0: "about",
    1: "contact"
  };
  const indexToTabName = {
    about: 0,
    contact: 1
  };

  const [TabValue, setTabValue] = useState(
    indexToTabName[props.match.params.page]
  );

  const handleChange = (event, newValue) => {
    props.history.push(`/home/${tabNametoIndex[newValue]}`);
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
