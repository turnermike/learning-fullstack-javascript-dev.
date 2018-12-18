import React from 'react';
import Header from './Header';




class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
    // ajax stuff
    // timers/liseners

    // console.log('did Mount');
    // debugger;
  };
  componentWillUnmount() {
    // clean timers/listners here

    // console.log('will Unmount');
    // debugger;
  };
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
        ...
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