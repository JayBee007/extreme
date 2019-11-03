import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
// import {composeWithDevTools} from 'redux-devtools-extension';

import productsReducer from './store/reducers/product.reducer';
import cartReducer from './store/reducers/cart.reducer';

import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);
// const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};
export default App;
