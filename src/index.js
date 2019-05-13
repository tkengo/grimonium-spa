import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { bindActionCreators, combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import './index.css';
import rootSaga from './sagas/root';
import CrawlingUrls from './components/crawling_urls/CrawlingUrls';
import { Actions } from './sagas/actions';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    router: connectRouter(history),
    reducer: reducer,
  }),
  compose(applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  ))
);

sagaMiddleware.run(rootSaga);

function mapStateToProps(state) {
  return state.reducer;
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(Actions, dispatch)
  };
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(CrawlingUrls);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={ConnectedApp} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
