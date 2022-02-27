import { ActionTypes } from './type';
import { data } from './sample.data';

export const loadData = (dataType) => ({
  type: ActionTypes.DLOAD,
  payload: {
    dataType: dataType,
    data: data[dataType],
  },
});

export const addCart = (book) => ({
  type: ActionTypes.CADD,
  payload: {
    book,
    quantity: 1,
  },
});

export const updateCart = (book, quantity) => ({
  type: ActionTypes.CUPDATE,
  payload: { book, quantity },
});

export const deleteCart = (book) => ({
  type: ActionTypes.CDELETE,
  payload: book,
});

export const deleteAll = () => ({
  type: ActionTypes.CCLEAR,
});
