/**
 * Created by Vitaliy on 29.03.2017.
 */
export function urlMakerFromTemplate(templateUrl, data) {
  let newUrl = templateUrl;

  Object.keys(data).forEach((item) => {
    newUrl = newUrl.replace(`:${item}/`, `${data[item]}/`);
  });

  if (/:/g.test(newUrl)) return false;
  return newUrl;
}

export function urlQueryMaker(data) {
  return Object.keys(data).reduce((result, key) => {
    const value = data[key];

    if (Object.is(value, null)) return result;

    if (!result) return `?${key}=${value}`; // first part '?farm=1'

    return `${result}&${key}=${value}`; // next values '?farm=1&deleted=false'
  }, '');
}
