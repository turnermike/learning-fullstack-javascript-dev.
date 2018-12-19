import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

// alias of history api pushState
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {

  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  componentDidMount() {
    // ajax stuff
    // timers/liseners
    // console.log('did Mount');
    // debugger;

    // this was moved to src/index.js
    // axios.get('/api/contests')
    //   .then(res => {
    //     // console.log('res', res.data.contests);
    //     this.setState({
    //       contests: res.data.contests
    //     });

    //   })
    //   .catch(console.error);


  }

  componentWillUnmount() {
    // clean timers/listners here
    // console.log('will Unmount');
    // debugger;
  }

  fetchContest = (contestId) => {

    // change route to /contest/<id>
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );

    // look up the contest
    api.fetchContest(contestId).then(contest => {
        this.setState({
          pageHeader: contest.contestName,
          currentContestId: contest.id,
          contests: {
            ...this.state.contests,
            [contest.id]: contest
          }
        });
    });

  }

  // get the contest component
  currentContent() {

    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }

    return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
  }

  // using '...' spread operator in ContestPreview component so it gets all object properies of contests
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}


App.propTypes = {
  initialContests: propTypes.object
};

// Stateless Example:
// const App = () => {
//   return (
//     <div className="App">
//       <Header message="Naming Contests" />
//       <div>
//       ...
//       </div>
//     </div>
//   );
// };

export default App;
