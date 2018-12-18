import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import data from './testData';
console.log('data', data);


// render method
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

setTimeout(() => {
  ReactDOM.render(
    <h2>...</h2>,
    document.getElementById('root')
  );
}, 4000);