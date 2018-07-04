import React from 'react';

import PropTypes from 'prop-types';

import './Form.css';

const defaultAnimal = {
  name: '',
  imgUrl: '',
  description: '',
};

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newAnimal: defaultAnimal,
  }

  formFieldStringState = (name, e) => {
    const tempAnimal = {...this.state.newAnimal};
    tempAnimal[name] = e.target.value;
    this.setState({newAnimal: tempAnimal});
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  imgUrlChange = (e) => {
    this.formFieldStringState('imgUrl', e);
  }

  descriptionChange = (e) => {
    this.formFieldStringState('description', e);
  }

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    const {newAnimal} = this.state;
    e.preventDefault();
    if (
      newAnimal.name &&
      newAnimal.imgUrl &&
      newAnimal.description) {
      onSubmit(this.state.newAnimal);
      this.setState({newAnimal: defaultAnimal});
    } else {
      alert('dear god why???');
    }
  }

  render () {
    const {newAnimal} = this.state;
    return (
      <div className="col-xs-8 col-xs-offset-2">
        <h2 className="text-center">Submit new animal:</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-6">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="name"
                placeholder="Amos"
                value={newAnimal.name}
                onChange={this.nameChange}
              />
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="col-xs-6">
              <label htmlFor="imgUrl">Image URL:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="imgUrl"
                placeholder="http://www.awesome-image.com"
                value={newAnimal.imgUrl}
                onChange={this.imgUrlChange}
              />
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="col-xs-6">
              <label htmlFor="description">Description:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="description"
                placeholder="kind of a biter"
                value={newAnimal.description}
                onChange={this.descriptionChange}
              />
            </fieldset>
          </div>

          <button className="col-xs-6 btn btn-default">Add Mashup</button>
        </form>
      </div>
    );
  }
}

export default Form;
