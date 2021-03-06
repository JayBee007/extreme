import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart.action';
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
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const qty = selectedCartItem.quantity;
      let updatedCartItems;
      if (qty > 1) {
        const updatedCartItem = new CartItem(
          qty - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updatedCartItems = {...state.items, [action.pid]: updatedCartItem};
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice
      };
    default:
      return state;
  }
};
