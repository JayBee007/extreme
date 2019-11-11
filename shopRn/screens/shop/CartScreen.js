import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Grid,
  Row,
  Text,
  Button,
  Col,
  List
} from 'native-base';
import {useSelector} from 'react-redux';

import CartItem from '../../components/shop/CartItem';

const CartScreen = props => {
  const totalCartAmt = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    let transformedItems = [];
    for (const key in state.cart.items) {
      const {productPrice, productTitle, quantity, sum} = state.cart.items[key];
      transformedItems.push({
        productId: key,
        productTitle,
        productPrice,
        quantity,
        sum
      });
    }
    return transformedItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem>
            <Grid>
              <Row>
                <Col>
                  <Text style={{fontFamily: 'OpenSans-Bold'}}>
                    Total:{' '}
                    <Text style={{fontFamily: 'OpenSans'}}>
                      ${totalCartAmt.toFixed(2)}
                    </Text>
                  </Text>
                </Col>
                <Col>
                  <Button disabled={cartItems.length === 0}>
                    <Text>Order Now</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
        <List
          dataArray={cartItems}
          keyExtractor={item => item.productId}
          renderItem={({item, index}) => <CartItem productItem={item} />}
        />
      </Content>
    </Container>
  );
};

export default CartScreen;
