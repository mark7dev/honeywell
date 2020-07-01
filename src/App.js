import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import Student from './components/Student';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/student/:id" component={Student} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
