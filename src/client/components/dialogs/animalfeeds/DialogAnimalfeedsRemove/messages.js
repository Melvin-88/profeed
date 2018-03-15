/*
 * Animalfeeds Messages
 *
 * This contains all the text for the Animalfeeds component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'animalfeeds.dialog.remove.title',
    defaultMessage: 'Remove animalfeed receipt'
  },
  message : {
    id: 'animalfeeds.dialog.remove.message',
    defaultMessage: 'Do you agree to delete receipt {name} with ID {id}?'
  },
  button: {
    cancel :  {
      id: 'animalfeeds.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove :  {
      id: 'animalfeeds.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
