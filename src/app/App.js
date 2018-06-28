import React, { Component } from 'react';

import Animals from '../components/Animal/Animal';
import Form from '../components/Form/Form';

import './App.css';

class App extends Component {

  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals />
        </div>
        <div className="col-sm-6">
          <Form />
        </div>

      </div>
    );
  }
}

export default App;
