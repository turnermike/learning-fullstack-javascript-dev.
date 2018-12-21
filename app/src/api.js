/**
 * Send ajax requests to API. (./api/index.js)
 *
 *
 */
import axios from 'axios';

/**
 * Fetch an individual contest.
 *
 * @param {int} contestId
 *
 * @return {response}
 */
export const fetchContest = contestId => {
  return axios.get(`/api/contest/${contestId}`)
    .then(res => res.data);
}

/**
 * Fetch all Contests
 *
 * @return {response}
 */
export const fetchContestList = () => {
  return axios.get('/api/contests')
    .then(res => res.data.contests);
}

/**
 * Fetch suggested contest names for a single contest.
 *
 * @param {array} nameIds
 *
 * @return {response}
 */
export const fetchNames = nameIds => {
  return axios.get(`/api/names/${nameIds.join(',')}`)
    .then(res => res.data.names);
}

export const addName = (newName, contestId) => {
  return axios.post('/api/names', { newName, contestId })
    .then(resp => resp.data);
}