/**
 * Created by Tanya on 11.05.2017.
 */
import React from 'react';
/**
 *
 * @param Component
 * @param store
 * @param props
 * @param selectorPermission - '<app_label>.<model_name>.<view|add|change|delete>'
 * @return {XML}
 */
/* eslint-disable  max-params, react/no-multi-comp */
export default function permissionWrapper(Component, store, props, selectorPermission) {
  // console.log('Component ', Component);
  const keys = selectorPermission.split('.');
  const state = store.getState();

  // console.log('state ', state);
  // console.log('selector ', selectorPermission);

  if (keys.length < 3) return null;

  const { permissions } = state.app;
  const permission = permissions.find((item) => item.label === keys[0] && item.name === keys[1]);

  return permission && permission[keys[2]] ? <Component {...props}/> : null;
}

/**
 *
 * @param Component
 * @param s - store
 * @param p - props
 * @param selectorPermissions
 */
/* eslint-disable  max-params, react/no-multi-comp */
export function arrayPermissionsWrapper(Component, s, p, selectorPermissions) {
  const component = selectorPermissions.find((permission) => permissionWrapper(Component, s, p, permission));
  // console.log('PermissionWrapper | arrayPermissionsWrapper | component : ', component);

  return !!component ? <Component {...p}/> : null;
}
