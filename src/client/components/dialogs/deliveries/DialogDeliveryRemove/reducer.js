import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : '',
  delivery : null
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_DELIVERY_CLOSE) {
    return Object.assign({}, state, initialState);
  }

  if (type === actions.DIALOG_DELIVERY_OPEN) {
    // console.log('DialogDeliveryRemove | reducer | DIALOG_DELIVERY_OPEN payload ', payload);
    return Object.assign({}, state, {
      open : true,
      delivery : payload.delivery
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

