import React from 'react';
import propTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {contests.map(contest =>
       <ContestPreview
        key={contest.id}
        onClick={onContestClick}
        {...contest} />
    )}
  </div>

);

ContestList.propTypes = {
  contests: propTypes.array,
  onContestClick: propTypes.func.isRequired
};

export default ContestList;