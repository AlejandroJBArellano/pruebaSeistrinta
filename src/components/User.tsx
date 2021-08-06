import React, { Component } from 'react'
import { Grid, CardHeader, Card, CardMedia, CardContent, makeStyles } from "@material-ui/core"

interface IUser {
    id?: number;
    email: string;
    last_name: string;
    first_name: string;
    avatar: string;
}
const classCard = makeStyles({
    root: {
        width: "200px",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "#ff6",
        textAlign: "center"
    }
})
class User extends Component<IUser, any> {
    render():JSX.Element {
        const user:IUser = this.props;
        return <Card>
        <CardHeader>
            <CardMedia alt={`User: ${user.first_name} ${user.last_name}`} component="img" image={user.avatar} title={`User: ${user.first_name} ${user.last_name}`}/>
        </CardHeader> 
        <CardContent>
            <h2>{user.email}</h2>
        </CardContent>
    </Card>
    }
}
export default User