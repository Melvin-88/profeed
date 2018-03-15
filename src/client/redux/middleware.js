/**
 * Created by DzEN on 29.01.2017.
 */
export default () => next => action => {
  console.log('Action: ', action);
  return next(action);
};
