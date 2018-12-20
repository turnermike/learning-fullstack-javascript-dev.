// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = contestId => {
  if(contestId) {
    return `${config.serverUrl}/api/contest/${contestId}`;
  }
  return `${config.serverUrl}/api/contests/`;
};

const getInitialData = (contestId, apiData) => {

  if(contestId){
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData
      }
    };
  }
  return {
    contests: apiData.contests
  }
};

// get contests
const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId))
    .then(res => {
      const initialData = getInitialData(contestId, res.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      };

    });

export default serverRender;
