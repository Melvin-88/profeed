/*
 * DialogFarmsRemoveAdd Messages
 *
 * This contains all the text for the DialogFarmsRemoveAdd component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'farms.dialog.remove.title',
    defaultMessage: 'Remove farm'
  },
  message : {
    id: 'farms.dialog.remove.message',
    defaultMessage: 'Do you agree to delete farm {name} with ID {id}?'
  },
  button: {
    cancel: {
      id: 'farms.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove: {
      id: 'farms.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
