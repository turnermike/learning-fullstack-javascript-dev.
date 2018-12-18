import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';

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
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );
  }

  // using '...' spread operator in ContestPreview component so it gets all object properies of contests
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests} />
      </div>
    );
  }
}


App.propTypes = {
  initialContests: propTypes.array
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
