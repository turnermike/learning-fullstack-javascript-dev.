import React from 'react';
import propTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests }) => (
  <div className="ContestList">
    {contests.map(contest =>
      <ContestPreview key={contest.id} {...contest} />
    )}
  </div>

);

ContestList.propTypes = {
  contests: propTypes.array
};

export default ContestList;