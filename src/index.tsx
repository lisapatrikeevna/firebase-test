import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter } from 'react-router-dom';
import {BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom'
import { AuthProvider } from './components/Auth';
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <AuthProvider>
      {/*<BrowserRouter>*/}
          <Provider store={store}>
          <App/>
          </Provider>
      </AuthProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
