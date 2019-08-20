import Types from '../types';

export const selectDate = date => ({
  type: Types.SELECT_DATE,
  payload: {
    date
  }
});

export const addRecord = record => ({
  type: Types.ADD_RECORD,
  payload: {
    record
  }
});

export const updateRecord = (id, record) => ({
  type: Types.UPDATE_RECORD,
  payload: {
    id,
    record
  }
});

export const deleteRecord = id => ({
  type: Types.DELETE_RECORD,
  payload: {
    id
  }
});

export const payRecord = id => ({
  type: Types.PAY_RECORD,
  payload: {
    id
  }
});