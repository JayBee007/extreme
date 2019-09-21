import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#c2185b' : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
    },
  },
);

export default createAppContainer(ProductsNavigator);
