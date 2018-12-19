// ajax fetch stuff

import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/contest/${contestId}`)
    .then(res => res.data);
}