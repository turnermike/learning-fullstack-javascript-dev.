import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';

axios.get('/api/contests')
  .then(res => {
    // console.log('res.data', res.data);
    ReactDOM.render(
      <App initialData={res.data} />,
      document.getElementById('root')
    );
  })
  .catch(console.error);

setTimeout(function () {
  ReactDOM.render(
    <h2>Clear!!</h2>,
    document.getElementById('root')
  );
}, 5000);