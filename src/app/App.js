import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import animalRequests from '../firebaseRequests/animals';

import Animals from '../components/AnimalListing/Animal';
import Form from '../components/AnimalForm/Form';

import './App.css';

class App extends Component {
  state = {
    animals: [],
  }
  componentDidMount () {
    connection();
    animalRequests.getRequest()
      .then((animals) => {
        this.setState({animals});
      })
      .catch((error) => {
        console.error('error getting animals GET', error);
      });
  }
  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals animals={this.state.animals}/>
        </div>
        <div className="col-sm-6">
          <Form />
        </div>

      </div>
    );
  }
}

export default App;
