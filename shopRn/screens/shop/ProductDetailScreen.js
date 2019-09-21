import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId');
  const product = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );
  return (
    <View>
      <Text>ProductDetailScreen - {product.title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = data => ({
  headerTitle: data.navigation.getParam('productTitle')
});

export default ProductDetailScreen;
