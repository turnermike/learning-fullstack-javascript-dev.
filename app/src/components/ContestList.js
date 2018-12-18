import React from 'react';
import propTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contest =>
       <ContestPreview
        key={contest.id}
        onClick={onContestClick}
        {...contest[contest.id]} />
    )}
  </div>

);

ContestList.propTypes = {
  contests: propTypes.object,
  onContestClick: propTypes.func.isRequired
};

export default ContestList;