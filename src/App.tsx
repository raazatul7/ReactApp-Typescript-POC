import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './views/login/login'
import Signup from "./views/signup/signup"

const App = () => {

  return (
    <Container className="d-flex align-items-center justify-content-center mt-5" style={{ minHeight: "50vh" }}>

      <div className="w-100" style={{ maxWidth: "400px" }}>

        <Router>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>


      </div>

    </Container >

  );
}


export default App;