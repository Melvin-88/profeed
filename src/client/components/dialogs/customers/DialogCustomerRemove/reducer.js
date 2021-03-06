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
    return Object.assign({}, state, {
      open : true,
      customer : payload.customer
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

