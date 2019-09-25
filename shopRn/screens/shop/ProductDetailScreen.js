import React from 'react';
import {Image, View} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

import * as cartActions from '../../store/actions/cart.action';

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId');
  const product = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <Container>
      <Content>
        <Image
          source={{uri: product.imageUrl}}
          style={{height: 200, flex: 1}}
        />
        <Container
          style={{
            alignItems: 'center',
            marginTop: 10
          }}>
          <Button
            style={{marginBottom: 10}}
            onPress={() => {
              dispatch(cartActions.addToCart(product));
            }}>
            <Text style={{fontFamily: 'OpenSans'}}>Add to cart</Text>
          </Button>
          <Text note style={{fontFamily: 'OpenSans-Bold'}}>
            ${product.price.toFixed(2)}
          </Text>
          <View
            style={{
              textAlign: 'center',
              marginHorizontal: 20,
              marginVertical: 20
            }}>
            <Text style={{fontFamily: 'OpenSans'}}>{product.description}</Text>
          </View>
        </Container>
      </Content>
    </Container>
  );
};

ProductDetailScreen.navigationOptions = data => ({
  headerTitle: data.navigation.getParam('productTitle')
});

export default ProductDetailScreen;
