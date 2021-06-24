import React from "react";
import { AppBar, Typography, Toolbar, makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(10),
    },
    logo: {
      marginRight: theme.spacing(2),
    },
    link: {
      marginRight: theme.spacing(1),
    },
  }));

function Nav() {
    const classes = useStyles();
    // const location = useLocation();

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Typography className={classes.logo} variant="h5"><b>Google Books</b></Typography>
                    <Link to="/">
                      <Typography className={classes.link} variant="h6">Search</Typography>
                    </Link>
                    <Typography className={classes.link} variant="h6">Saved</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav;
