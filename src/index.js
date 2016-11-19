import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';

ReactDOM.render(
  React.createElement(Router, { history: browserHistory },
    React.createElement(Route, { path: '/', component: App }),
    React.createElement(Route, {
      path: '*',
      onEnter: (nextState, replace) => replace({ pathname: '/' }),
    }),
  ),
  document.getElementById('root'),
);
