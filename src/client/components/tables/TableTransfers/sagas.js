/*
* TableTransfers Actions
*
* This contains all the text for the TableTransfers component.
*/
import { fork } from 'redux-saga/effects'; // , take, call, put, race
// import * as actions from './actions.js';

function* generator() {}

export default function* mainSaga() {
  yield [ fork(generator) ];
}
