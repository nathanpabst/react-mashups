import React from 'react';

import './Form.css';

class Form extends React.Component {
  state = {
    newAnimal: {},
  }
  render () {
    return (
      <div className='Form'>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Name:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="newAnimalName" placeholder="animal name" />
            </div>
          </div>
          <div class="form-group">
            <label for="imageURL" class="col-sm-2 control-label">Image URL:</label>
            <div class="col-sm-10">
              <input type="url" class="form-control" id="newAnimalImage" placeholder="www.boblablawslawblogs.com" />
            </div>
          </div>
          <div class="form-group">
            <label for="description" class="col-sm-2 control-label">Description:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="newAnimalDescription" placeholder="plays well with others" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default">Add Mashup</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
