import React from 'react'
import { makeStyles, Grid, Paper, TextField, Button, Link } from "@material-ui/core"

const classF = makeStyles({
    root: {
        margin: "auto",
        padding: "30px",
    }
})

export default function Form ():JSX.Element {
    const classForm = classF()
    return <Grid container>
        <Grid item xs={6}>
            <Paper className={classForm.root} elevation={10}>
                <h3>Users</h3>
                <p>A test of an API external</p>
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classForm.root} elevation={10}>
                <p>SIGN UP FOR FREE</p>
                <h2>Sign Up</h2>
                <p>Already a member? <Button color="primary">Sign In</Button></p>
                <form action="https://reqres.in/api/register" method="POST">
                    <TextField fullWidth id="outlined-basic" name="email" label="Email" variant="outlined" defaultValue="eve.holt@reqres.in" autoFocus/>
                    <TextField fullWidth id="outlined-basic" name="password" label="Password" variant="outlined" defaultValue="pistol"/>
                    <button>Sign Up</button>
                    <Button variant="outlined" color="primary">
                    <i className="fab fa-google"></i> Sign Up with Google
                    </Button>
                </form>
            </Paper>
        </Grid>
    </Grid>
}
