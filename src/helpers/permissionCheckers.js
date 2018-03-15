/**
 * Created by Tanya on 12.06.2017.
 */
import cookie from 'react-cookie';
import config from 'config';

export function permissionChecker(store, selectorPermission) {
  const keys = selectorPermission.split('.');
  const state = store.getState();

  if (keys.length < 3) return null;

  const { permissions } = state.app;
  const permission = permissions.find((item) => item.label === keys[0] && item.name === keys[1]);

  return permission && permission[keys[2]];
}

export function arrayPermissionsChecker(s, selectorPermissions) {// eslint-disable-line react/no-multi-comp
  const component = selectorPermissions.find((permission) => permissionChecker(s, permission));
  // console.log('PermissionWrapper | arrayPermissionsWrapper | component : ', component);

  return !!component;
}

export function redirector(store, selectorPermission) {
  return (nextState, replace) => {
    const resultFunc = Array.isArray(selectorPermission) ? arrayPermissionsChecker : permissionChecker;

    if (!resultFunc(store, selectorPermission)) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };
}

export function checkAuth(nextState, replace) {
  const token = cookie.load('auth_token');


  // Check if user has token
  // console.log('App | sagas | *checkAuth | token ', token);
  if (!token || Object.keys(token).length < 1) {
    replace({
      pathname: `/${config.URLS.LOGIN}`,
      state: { nextPathname: nextState.location.pathname }
    });
  }
}
