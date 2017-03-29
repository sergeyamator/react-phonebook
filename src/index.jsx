import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import App from './app.jsx';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <AppContainer><App/></AppContainer>
  </Provider>,
  document.querySelector("#app"))
;


