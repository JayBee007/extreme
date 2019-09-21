import React from 'react';
import {Image} from 'react-native';
import {Content, Card, CardItem, Text, Left, Button, Right} from 'native-base';

const ProductItem = props => {
  const {imageUrl, title, price, onViewDetail} = props;

  const navigateToDetails = () => {
    onViewDetail();
  };

  return (
    <Content padder>
      <Card>
        <CardItem cardBody>
          <Image source={{uri: imageUrl}} style={{height: 200, flex: 1}} />
        </CardItem>
        <CardItem style={{flexDirection: 'column'}}>
          <Text uppercase>{title}</Text>
          <Text note>${price}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button onPress={navigateToDetails}>
              <Text>View Details</Text>
            </Button>
          </Left>
          <Right>
            <Button>
              <Text>To Cart</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default ProductItem;
