import React from "react";
import { Paper, InputBase, makeStyles, IconButton, Grid } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      alignItems: "center"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      paddingLeft: 10,
    },
  }));

function SearchForm() {
    const classes = useStyles();

    return (
        <Grid container justify="center" className={classes.root}>
          <Grid item xs={6}>
              <Paper component="form">
                <Grid container alignItems="center" justify="space-between">
                  <InputBase
                      className={classes.input}
                      placeholder="Search Google Books"
                      inputProps={{ 'aria-label': 'search google books' }}
                  />
                  <IconButton type="submit" className={classes.iconButton} aria-label="search">
                      <SearchIcon />
                  </IconButton>
                </Grid>
              </Paper>
          </Grid>
        </Grid>
    )
}

export default SearchForm;