import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart.action';

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDescription', {
              productId: item.id,
              productTitle: item.title
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(item));
          }}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  title: 'All Products'
};

export default ProductOverviewScreen;
