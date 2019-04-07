import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Booking from './components/Booking';
import {createBrowserHistory} from 'history';
import Payment from './components/Payment';

const browserHistory = createBrowserHistory();

const routing = (
    <Router history={browserHistory}>
        <div>
       
        <Route exact path="/" component={App} />
        <Route path="/book" component={Booking}/>
        <Route path="/payment" component={Payment}/>
      
        

        
        </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
