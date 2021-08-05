import React from 'react';
import { Grid, Paper, makeStyles } from "@material-ui/core";

const classError = makeStyles({
    root: {
        display: "grid",
        placeItems: "center",
        height:"100vh"
    }
})

export default function PageNotFound() {
    const classes = classError()
    return <Grid container className={classes.root}>
        <Grid item xs={8}>
            <Paper elevation={20}>Llegaste a un lugar desconocido de la aplicación...</Paper>
        </Grid>
    </Grid>
}
