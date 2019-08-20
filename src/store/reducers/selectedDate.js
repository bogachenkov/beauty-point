import m from 'moment';
import Types from '../types';

const initialState = m();

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case Types.SELECT_DATE:
      return payload.date
    default:
      return state;
  }
}
