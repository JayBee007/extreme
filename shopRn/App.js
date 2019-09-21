import React from 'react';
import {View, Text} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './store/reducers/product.reducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Hello</Text>
      </View>
    </Provider>
  );
};
export default App;
