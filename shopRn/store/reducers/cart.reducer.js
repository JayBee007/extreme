import {ADD_TO_CART} from '../actions/cart.action';
import CartItem from '../../models/cartItem';

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {items} = state;
      const addProduct = action.product;
      const prodPrice = addProduct.price;
      const prodTitle = addProduct.title;

      if (items[addProduct.id]) {
        const quantity = items[addProduct.id].quantity + 1;
        const sum = prodPrice * quantity;

        const updatedCartItem = new CartItem(
          quantity,
          prodPrice,
          prodTitle,
          sum
        );
        return {
          ...state,
          items: {...state.items, [addProduct.id]: updatedCartItem},
          totalAmount: state.totalAmount + prodPrice
        };
      } else {
        const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
        return {
          ...state,
          items: {...state.items, [addProduct.id]: newCartItem},
          totalAmount: state.totalAmount + prodPrice
        };
      }
    default:
      return state;
  }
};
