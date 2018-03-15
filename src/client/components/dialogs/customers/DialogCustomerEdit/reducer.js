/*
 * DialogCustomerEdit Reducer
 *
 * This contains all the text for the DialogCustomerEdit component.
 */

import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : '',
  customer : null
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_CUSTOMER_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_CUSTOMER_OPEN) {
    const farms = (payload && payload.customer && payload.customer.farms || []).map(item => item.id);
    const groups = (payload && payload.customer && payload.customer.groups || []).map(item => item.id);

    return Object.assign({}, state, {
      open : true,
      customer : { ...payload.customer, farms, groups }
    });
  }

  if (type === actions.DIALOG_CUSTOMER_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_CUSTOMER_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMesssage
    });
  }

  if (type === actions.DIALOG_CUSTOMER_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}

