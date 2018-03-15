/*
 * UserGroupsDialogs Messages
 *
 * This contains all the text for the UserGroupsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'usergroups.dialog.remove.title',
    defaultMessage: 'Remove mixer'
  },
  message: {
    id: 'usergroups.dialog.remove.message',
    defaultMessage: 'Do you agree to delete user group {name} with ID {id}?'
  },
  button: {
    cancel:  {
      id: 'usergroups.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove:  {
      id: 'usergroups.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
