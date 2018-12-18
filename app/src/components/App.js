import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

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

    axios.get('/api/contests')
      .then(res => {
        // console.log('res', res.data.contests);
        this.setState({
          contests: res.data.contests
        });

      })
      .catch(console.error);


  }
  componentWillUnmount() {
    // clean timers/listners here
    // console.log('will Unmount');
    // debugger;
  }
  // using '...' spread operator in ContestPreview component so it gets all object properies of contests
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
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
