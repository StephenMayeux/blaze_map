import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Items } from '../imports/collections/items';

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <Blaze template="mymap" />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
