import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import {Provider} from "react-redux"
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const store = configureStore();

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);