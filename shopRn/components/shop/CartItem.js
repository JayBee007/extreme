import React from 'react';
import {View} from 'react-native';
import {ListItem, Text, Badge, Left, Right, Icon} from 'native-base';

const CartItem = props => {
  const {quantity, productTitle, sum} = props.productItem;
  return (
    <ListItem>
      <Left>
        <Badge info style={{marginRight: 10}}>
          <Text style={{fontFamily: 'OpenSans-Bold'}}>{quantity}</Text>
        </Badge>
        <Text style={{fontFamily: 'OpenSans-Bold'}}>{productTitle}</Text>
      </Left>
      <Right>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontFamily: 'OpenSans-Bold', marginRight: 10}}>
            ${sum}
          </Text>
          <Icon type="Ionicons" name="trash" style={{color: 'red'}} />
        </View>
      </Right>
    </ListItem>
  );
};

export default CartItem;
