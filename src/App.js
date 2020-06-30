import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import Student from './components/Student';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/student/:id" component={Student} />
        </Switch>
    </Router>
  );
}

export default App;
