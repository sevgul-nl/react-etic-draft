import { createStore } from 'redux';
import { BookReducer } from './book.reducer';
import { CartReducer } from './cart.reducer';

export const DataStore = createStore((storeData, action) => {
  let reducers = [CartReducer, BookReducer];

  for (let i = 0; i < reducers.length; i++) {
    let newStore = reducers[i](storeData, action);
    if (newStore !== storeData) {
      return newStore;
    }
  }
  return storeData;
});
