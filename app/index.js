import React, { Component } from "react";
import App from "./containers/app";

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const AppProvider = (
  <Provider store={store}>
    <App />
  </Provider>
)


class Main extends Component {
  render() {
    return (
      AppProvider
    )
  }
}

export default Main;
