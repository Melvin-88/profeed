/*
 * UserGroupsDialogs Messages
 *
 * This contains all the text for the UserGroupsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'usergroups.dialog.edit.title',
    defaultMessage: 'Edit user grop'
  },

  form : {
    nameGroup: {
      title: {
        id: 'usergroups.dialog.edit.form.nameGroup.title',
        defaultMessage: 'Name group: '
      },

      hint: {
        id: 'usergroups.dialog.edit.form.nameGroup.hint',
        defaultMessage: 'name group'
      }
    },

    sections: {
      title: {
        id: 'usergroups.dialog.edit.form.sections.title',
        defaultMessage: 'Sections: '
      },

      hint: {
        id: 'usergroups.dialog.edit.form.sections.hint',
        defaultMessage: 'section'
      }
    }
  },

  button: {
    cancel: {
      id: 'usergroups.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    edit: {
      id: 'usergroups.dialog.edit.button.save',
      defaultMessage: 'edit'
    }
  }
});
