/*
 * CustomerDialogs Messages
 *
 * This contains all the text for the CustomerDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'customers.dialog.remove.title',
    defaultMessage: 'Remove customer'
  },
  message : {
    id: 'customers.dialog.remove.message',
    defaultMessage: 'Do you agree to delete customer {name} with ID {id}?'
  },
  button: {
    cancel :  {
      id: 'customers.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove :  {
      id: 'customers.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
