/*
 * RationsDialogs Messages
 *
 * This contains all the text for the RationsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.rationgroup.dialog.remove.title',
    defaultMessage: 'Remove ingredient'
  },
  message: {
    id: 'rations.rationgroup.dialog.remove.message',
    defaultMessage: 'Do you agree to delete {name} with ID {id}?'
  },
  button: {
    cancel:  {
      id: 'rations.rationgroup.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove:  {
      id: 'rations.rationgroup.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
