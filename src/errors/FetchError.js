/**
 * Created by Tanya on 14.08.2017.
 */
import { FAILED_TO_FETCH } from './ErrorMessages';

export default class FetchError extends Error {
  constructor(props) {
    super(props);
    this.message = FAILED_TO_FETCH;
  }
}
