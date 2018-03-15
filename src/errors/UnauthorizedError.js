/**
 * Created by DzEN on 14.02.2017.
 */
import { UNAUTHORIZED } from './ErrorMessages';

export default class UnauthorizedError extends Error {
  constructor(props) {
    super(props);
    this.message = UNAUTHORIZED;
  }
}
