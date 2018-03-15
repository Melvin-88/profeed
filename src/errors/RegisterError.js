import { FAILED_TO_FETCH } from './ErrorMessages';

export default class RegisterError extends Error {
  constructor(code) {
    super();
    this.message = FAILED_TO_FETCH;
  }
}
