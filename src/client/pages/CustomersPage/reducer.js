/*
* CustomersPage Reducer
*
* This contains all the text for the CustomersPage component.
*/
import * as actions from './actions.js';
import { mapCustomers } from 'helpers/mappers';

const initialState = {
  customers : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.CUSTOMERS_SET) {
    return { ...state, customers : (payload.customers || []).map((item) => mapCustomers(item)) };
  }

  return state;
}
