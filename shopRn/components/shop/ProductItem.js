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
          <Text uppercase style={{fontFamily: 'OpenSans-Bold'}}>
            {title}
          </Text>
          <Text note style={{fontFamily: 'OpenSans-Bold'}}>
            ${price}
          </Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button onPress={navigateToDetails}>
              <Text style={{fontFamily: 'OpenSans'}}>View Details</Text>
            </Button>
          </Left>
          <Right>
            <Button>
              <Text style={{fontFamily: 'OpenSans'}}>To Cart</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default ProductItem;
