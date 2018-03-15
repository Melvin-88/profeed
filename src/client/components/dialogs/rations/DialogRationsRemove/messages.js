/*
 * RationsDialogs Messages
 *
 * This contains all the text for the RationsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.dialog.remove.title',
    defaultMessage: 'Remove ration'
  },
  message: {
    id: 'rations.dialog.remove.message',
    defaultMessage: 'Do you agree to delete ration {name} with ID {id}?'
  },
  button: {
    cancel:  {
      id: 'rations.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove:  {
      id: 'rations.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
