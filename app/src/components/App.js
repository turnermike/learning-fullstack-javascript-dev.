import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api  from '../api';

// alias of history api pushState
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {

  static propTypes = {
    initialData: propTypes.object.isRequired
  };

  // state = {
  //   contests: this.props.initialContests
  // };
  state = this.props.initialData;



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
        console.log('contest', contest);
        this.setState({
          currentContestId: contest.id,
          contests: {
            ...this.state.contests,
            [contest.id]: contest
          }
        });
        // console.log('this.state', this.state);
    });

  }

  fetchContestList = () => {

    pushState(
      { currentContestId: null },
      '/'
    );

    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });

  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader() {
    if(this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return 'Naming Contests';
  }

  // get the contest component
  currentContent() {

    if (this.state.currentContestId) {
      return <Contest
              contestListClick={this.fetchContestList}
              {...this.currentContest()} />;
    }

    return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
  }

  // using '...' spread operator in ContestPreview component so it gets all object properies of contests
  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}


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
