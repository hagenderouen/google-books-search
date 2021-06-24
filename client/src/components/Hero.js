import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";

function Hero() {
    return (
        <Paper>
            <Box textAlign="center">
                <Typography variant="h2">(React) Google Books Search</Typography>
                <Typography variant="h3">Search for and save books of interest</Typography> 
            </Box>
        </Paper>
    )
};

export default Hero;