import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  typographyStyle: {
    flex: 1
  }
}));

export default function AppNavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.typographyStyle}
            variant="h6"
            color="inherit"
          >
            Akanksha Pardeshi
          </Typography>
          <AccountCircleIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}
