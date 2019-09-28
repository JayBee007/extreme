import React from 'react';
import {FlatList, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart.action';

import HeaderButton from '../../components/ui/HeaderButton';

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

ProductOverviewScreen.navigationOptions = navData => ({
  title: 'All Products',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        onPress={() => {
          navData.navigation.navigate('Cart');
        ;}}
        title="Cart"
        iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
      />
    </HeaderButtons>
  )
});

export default ProductOverviewScreen;
