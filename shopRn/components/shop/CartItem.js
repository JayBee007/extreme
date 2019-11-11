import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ListItem, Text, Badge, Left, Right, Icon} from 'native-base';

import {removeFromCart} from '../../store/actions/cart.action';

const CartItem = props => {
  const {quantity, productTitle, sum, productId} = props.productItem;
  const dispatch = useDispatch();
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
          <Icon
            onPress={() => dispatch(removeFromCart(productId))}
            type="Ionicons"
            name="trash"
            style={{color: 'red'}}
          />
        </View>
      </Right>
    </ListItem>
  );
};

export default CartItem;
