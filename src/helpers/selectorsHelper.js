/**
 * Created by Tanya on 22.02.2017.
 */
import { MODE } from './constants';

function getFarmId(state) {
  let farmId = null;

  if (state.app.farm && state.app.farm.id) {
    farmId = state.app.farm.id;
  } else {
    const { pathname } = state.routing.locationBeforeTransitions;

    [, , farmId] = pathname.split('/');
  }

  return farmId;
}

function getMode(state) {
  const activePart = (path => path.split('/')[1])(state.routing.locationBeforeTransitions.pathname);

  if (activePart === 'admin') return MODE.ADMIN;
  if (activePart === 'common') return MODE.COMMON;

  return null;
}

export {
  getFarmId,
  getMode
};
