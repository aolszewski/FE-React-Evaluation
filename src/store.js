import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const logger = createLogger({ collapsed: true });

export const configureStore = (state = initialState) => {
  const composeStore = compose(applyMiddleware(logger, thunk))(createStore);
  const store = composeStore(rootReducer, state)

  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;
};

export const initialState = {
  user: {
    userName: ''
  }
};
