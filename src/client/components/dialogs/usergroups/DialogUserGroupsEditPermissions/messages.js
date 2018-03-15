/*
 * UserGroupsDialogs Messages
 *
 * This contains all the text for the UserGroupsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'usergroups.dialog.editPermission.title',
    defaultMessage: 'Edit permission group'
  },

  form : {
    editPermissionGroup: {
      id: 'usergroups.dialog.editPermission.form.editPermissionGroup',
      defaultMessage: 'Edit permission group: '
    }
  },

  button: {
    cancel: {
      id: 'usergroups.dialog.editPermission.button.cancel',
      defaultMessage: 'Cancel'
    },

    edit: {
      id: 'usergroups.dialog.editPermission.button.edit',
      defaultMessage: 'edit'
    }
  }
});
