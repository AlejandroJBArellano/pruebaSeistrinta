import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Users from './components/Users';
import PageNotFound  from './components/PageNotFound';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, makeStyles } from '@material-ui/core';

const spacing = makeStyles({
  root: {
    display: "grid",
    placeItems: "center",
    height: "100vh"
  }
})
interface IEmail {
  email: string;
}
interface IPassword {
  password: string
}

export default function App():JSX.Element {

  const classContainer = spacing()

  return <Router>
    <Switch>
      <Route exact path="/" render={_ => <Container maxWidth="sm" className={classContainer.root}>
          <Form/>
        </Container>}
      />
      <Route path="/users" component={Users}/>
      <Route component={PageNotFound} />
    </Switch>
  </Router>
}