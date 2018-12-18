import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// render method
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// example of changing state
// setTimeout(() => {
//   ReactDOM.render(
//     <h2>...</h2>,
//     document.getElementById('root')
//   );
// }, 4000);