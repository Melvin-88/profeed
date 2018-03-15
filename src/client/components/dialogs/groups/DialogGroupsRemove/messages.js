/*
 * GroupsDialogs Messages
 *
 * This contains all the text for the GroupsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'groups.dialog.remove.title',
    defaultMessage: 'Remove group'
  },
  message : {
    id: 'groups.dialog.remove.message',
    defaultMessage: 'Do you agree to delete group {name} with ID {id}?'
  },
  button: {
    cancel :  {
      id: 'groups.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove :  {
      id: 'groups.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
