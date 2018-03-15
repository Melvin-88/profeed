/**
 * Created by DzEN on 14.02.2017.
 */
import { UnauthorizedError } from 'errors';

export function checkError(response) {
  switch (response.status) {
    case 401:
      throw new UnauthorizedError(response);
    default:
      throw new Error();
  }
}
