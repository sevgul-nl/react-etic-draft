import { ActionTypes } from './type';
export const CartReducer = (storeData, action) => {
  let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };

  switch (action.type) {
    case ActionTypes.CADD:
      const p = action.payload.book;
      const q = action.payload.quantity;
      let existing = newStore.cart.find((item) => item.book.id === p.id);
      if (existing) {
        existing.quantity += q;
      } else {
        newStore.cart = [...newStore.cart, action.payload];
      }
      newStore.cartItems += q;
      newStore.cartPrice += p.price * q;
      return newStore;
    case ActionTypes.CUPDATE:
      newStore.cart = newStore.cart.map((item) => {
        if (item.book.id === action.payload.book.id) {
          const diff = action.payload.quantity - item.quantity;
          newStore.cartItems += diff;
          newStore.cartPrice += item.book.price * diff;
          return action.payload;
        } else {
          return item;
        }
      });
      return newStore;
    case ActionTypes.CDELETE:
      let selection = newStore.cart.find(
        (item) => item.book.id === action.payload.id
      );
      newStore.cartItems -= selection.quantity;
      newStore.cartPrice -= selection.quantity * selection.book.price;
      newStore.cart = newStore.cart.filter((item) => item !== selection);
      return newStore;
    case ActionTypes.CCLEAR:
      return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 };
    default:
      return storeData || {};
  }
};
