import React, { useState } from "react";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import { Grid, makeStyles } from "@material-ui/core";
import BookCard from "../components/BookCard";

const useStyles = makeStyles((theme) => ({
    form: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    card: {
        marginBottom: theme.spacing(1)
    }
}));

function Search() {
    const [resultsState, setResultsState] = useState([]);
    console.log(resultsState);
    const classes = useStyles();

    return (
        <div>
            <Hero />
                <Grid 
                container 
                alignItem="center"
                justify="center"
                className={classes.form}>
                    <Grid item xs={6}>
                        <SearchForm setResultsState={setResultsState} />
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {/* map over results render BookCards */}
                    {resultsState.map(book => {
                        return (
                            <Grid item className={classes.card}>
                                <BookCard
                                    googleBooksId={book.id}
                                    volumeInfo={book.volumeInfo} 
                                />
                            </Grid>
                        )
                    })}
                </Grid>

        </div>
    )
};

export default Search;