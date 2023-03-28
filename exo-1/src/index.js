import React from 'react';
import ReactDOM from 'react-dom';

const currentDate = new Date();

const element = <p>Today is {currentDate.toLocaleDateString()}</p>;

ReactDOM.render(
  element,
  document.getElementById('root')
);


