import { ActionTypes } from './type';

export const BookReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DLOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
      };
    default:
      return storeData || {};
  }
};
