// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

// get contests
const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(res => {
      // console.log('res.data', res.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(<App initialData={res.data} />),
        initialData: res.data
      };

  });

// const serverRender = () =>
//   axios.get(`${config.serverUrl}/api/contests`)
//     .then(resp => {
//       return ReactDOMServer.renderToString(
//         <App initialContests={resp.data.contests} />
//       );
//     });


export default serverRender;
