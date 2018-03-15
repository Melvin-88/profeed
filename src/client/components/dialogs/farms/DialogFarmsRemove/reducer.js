/*
* DialogFarmsRemove Reducer
*
* This contains all the text for the DialogFarmsRemove component.
*/
import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMeassage :'',
  farm : null
};

export default function (state = initialState, action = {}) { //
  const { type, payload } = action;

  // console.log('DialogFarmsRemove | reducer | action ', action);

  if (type === actions.DIALOG_FARMS_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_FARMS_OPEN) {
    return Object.assign({}, state, {
      open : true,
      farm : payload.farm
    });
  }

  if (type === actions.DIALOG_FARMS_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_FARMS_SUBMIT_ERROR) {
    // console.log('DialogFarms | reduser | DIALOG_FARMS_SUBMIT_ERROR payload ', payload);
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMesssage : payload.errorMesssage
    });
  }

  if (type === actions.DIALOG_FARMS_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}
