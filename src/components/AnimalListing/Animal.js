import React from 'react';

import './Animal.css';

class Animal extends React.Component {
  render () {
    const {animals} = this.props;
    const animalsItemComponents = animals.map((animal) => {
      return (
        <li key={animal.id} className="col-sm-6">
          <div class="thumbnail">
            <img src={animal.imgUrl} alt="animal" />
            <div class="caption">
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          </div>
        </li>
      );
    });
    return (
      <div className="Animal">
        <h2>Animals</h2>
        <ul>{animalsItemComponents}</ul>
      </div>
    );
  }
}

export default Animal;
