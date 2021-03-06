import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, {routeTo} from './js/store/configureStore';
import App from './js/containers/App';
import Hero from './js/containers/Hero';
import About from './js/containers/About';
import Learn from './js/containers/Learn';
import Donate from './js/containers/Donate';
import ThankYou from './js/containers/ThankYou';
import TheConstitution from './js/containers/TheConstitution';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, push} from 'react-router-redux';
import {StyleSheet, css} from 'aphrodite';

const ANDERS_JILDEN = '../../img/Anders_Jilden.jpg';
const KALLE_K = '../../img/Kalle_K.jpg';
const TJ_HOLOWAYCHUK = '../../img/TJ_Holowaychuk.jpg';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store);
const MOUNT_NODE = document.getElementById('root');

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider routeTo={routeTo} store={store}>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Hero}/>
              <Route path="home" component={Hero}/>
              <Route path="about" component={About}/>
              <Route path="learn" component={Learn}/>
              <Route path="constitution" component={TheConstitution}/>
              <Route path="donate" component={Donate}/>
              <Route path="thankyou" component={ThankYou}/>
            </Route>
          </Router>
      </Provider>
    );
  }
}


ReactDOM.render(<Root store={store} />, MOUNT_NODE);

const backgroundStyles = StyleSheet.create({
  fixedBackground: {
    position:'fixed',
    width:'100vh',
    height:'100vh',
    overflow:'hidden',
  },
  picture: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    top: '50%',
    transform: 'translateY(-50%)'
  }
});

const bgImageArray = [ANDERS_JILDEN, KALLE_K, TJ_HOLOWAYCHUK];

bgImageArray.forEach(function(img){
  new Image().src = img;
  // caches images, avoiding white flash between background replacements
});

document.documentElement.style.background = 'url(' + bgImageArray[2] + ") no-repeat center center fixed";
document.documentElement.style.backgroundSize = "cover";

const backgroundSequence = (index = 0) => {
  setTimeout(() => {
    document.documentElement.style.background = 'url(' + bgImageArray[index] + ") no-repeat center center fixed";
    document.documentElement.style.backgroundSize = "cover";
    if( index + 1 >= bgImageArray.length){
      setTimeout(() => backgroundSequence(0), 7000);
    } else {
      setTimeout(() => backgroundSequence(index + 1), 7000);
    }
  }, 7000);
};

backgroundSequence();
