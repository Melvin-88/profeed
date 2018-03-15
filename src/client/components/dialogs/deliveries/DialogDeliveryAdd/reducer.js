/*
* DialogDeliveryAdd Reducer
*
* This contains all the text for the DialogDeliveryAdd component.
*/
// import * as actions from './actions.js';

import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : ''
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_DELIVERY_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_DELIVERY_OPEN) {
    // console.log('DialogDeliveryAdd | reducer | DIALOG_DELIVERY_OPEN payload ', payload);
    return Object.assign({}, state, {
      open : true
    });
  }

  if (type === actions.DIALOG_DELIVERY_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_DELIVERY_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMesssage
    });
  }

  if (type === actions.DIALOG_DELIVERY_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}

