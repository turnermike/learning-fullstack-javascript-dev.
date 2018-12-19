// ajax fetch stuff

import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/contest/${contestId}`)
    .then(res => res.data);
}

export const fetchContestList = () => {
  return axios.get('/api/contests')
    .then(res => res.data.contests);
}
