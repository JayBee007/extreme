import React from 'react';
import {FlatList} from 'react-native';
import {Container} from 'native-base';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  title: 'All Products',
};

export default ProductOverviewScreen;
