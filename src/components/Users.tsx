import { Container, Button, Grid, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import User from "./User"

interface IUser {
    id: any;
    email: any;
    first_name: any;
    last_name: any;
    avatar: any;
}
interface IClick {
    time: number
}

function Users():JSX.Element {

    const [users, setUsers] = useState<IUser[]>([])
    const [mouseClick, setMouseClick] = useState<IClick[]>([])

    const listUsers = async (e:any) => {

        const response = await fetch("https://reqres.in/api/users/"), usersJSON = await response.json();
        const newUsers: IUser[] = [...users, usersJSON.data] 
        setUsers(newUsers)
    }
    return <Container maxWidth="sm">
        <Button variant="contained" color="primary" onClick={listUsers}>
            Show Users
        </Button>
        <Grid container>
            { 
                users.map((user: IUser, i: number) => {
                const u = {
                    u: user
                }
                console.log(users)
                return <Grid key={`${i}`}>
                    <User {... u}/>
                </Grid>
                })
            }
        </Grid>
    </Container>
}

export default Users
