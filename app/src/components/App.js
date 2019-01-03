import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api  from '../api';

// alias of history api pushState
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
}

class App extends React.Component {

  static propTypes = {
    initialData: propTypes.object.isRequired
  };

  state = this.props.initialData;

  componentDidMount() {
    // ajax stuff
    // timers/liseners

    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });

    });

  }

  componentWillUnmount() {
    // clean timers/listners here
    // console.log('will Unmount');
    // debugger;

    onPopState(null);
  }

  fetchContest = (contestId) => {

    // change route to /contest/<id>
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );

    // look up the contest
    api.fetchContest(contestId).then(contest => {
        // console.log('contest', contest);
        this.setState({
          currentContestId: contest._id,
          contests: {
            ...this.state.contests,
            [contest._id]: contest
          }
        });
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

  /**
   * Fetch a contest name suggestion for a single contest.
   *
   *
   */
  fetchNames = (nameIds) => {

    if(nameIds.length === 0) {
      return;
    }

    api.fetchNames(nameIds).then(names => {
      this.setState({
        names
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

  lookupName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...'
      };
    }
    return this.state.names[nameId];
  };

  addName = (newName, contestId) => {

    api.addName(newName, contestId).then(res =>
      this.setState({
        contests: {
          ...this.state.contests,
          [res.updatedContest._id]: res.updatedContest
        },
        names: {
          ...this.state.names,
          [res.newName._id]: res.newName
        }
      })

    )
    .catch(console.error);

    // this.fetchNames(this.props.nameIds);

  }

  // get the contest component
  currentContent() {

    if (this.state.currentContestId) {

      return <Contest
              contestListClick={this.fetchContestList}
              fetchNames={this.fetchNames}
              lookupName={this.lookupName}
              addName={this.addName}
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
