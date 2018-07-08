import React from 'react';

import './Animal.css';

class Animal extends React.Component {
  render () {
    const {animals} = this.props;
    const animalsItemComponents = animals.map((animal) => {
      return (
        <li key={animal.id} className="col-sm-6">
          <div className="thumbnail">
            <img className="img" src={animal.imgUrl} alt="animal" />
            <div className="caption">
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          </div>
        </li>
      );
    });
    return (
      <div className="Animal">
        <ul>{animalsItemComponents}</ul>
      </div>
    );
  }
}

export default Animal;
