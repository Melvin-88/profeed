/**
 * Created by DzEN on 31.01.2017.
 */
import 'isomorphic-fetch';
import { checkError } from './requestErrors';
import FetchError from 'errors/FetchError';

export function makeRequest(url, method, options = {}, token = null) {
  const fetchOptions = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };

  if (token) {
    fetchOptions.headers.Authorization = `Token ${token}`;
  }

  if (options) {
    fetchOptions.body = JSON.stringify(options);
  }

  // console.log('restApi | makeRequest | fetchOptions ', fetchOptions);
  return fetch(url, fetchOptions)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.text()
          .then(responseText => {
            // console.log(`Server response: ${responseText}`);
            let jsonData;

            try {
              jsonData = JSON.parse(responseText);
            } catch (e) {
              // console.log('Parse error ', e);
            }
            return jsonData;
          }).catch(e => {
            console.log('>>> ', e);
          });
      }

      checkError(response);
    })
    .catch(e => {
      console.log('Fetch error : ', e);
      throw new FetchError();
    });
}

export function makeAPIRequest(url, method, options, token = null) {
  return makeRequest(`/api/${url}`, method, options, token);
}
