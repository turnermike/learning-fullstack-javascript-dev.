import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

ReactDOM.render(
    // React.createElement('h2', null, 'Hello React'),
    <h2 className="text-center">
        Centered
    </h2>,
    // <h2 style={{color}}>
    //     Hello React JSX -- {Math.random()}
    // </h2>,
    document.getElementById('root')
);

