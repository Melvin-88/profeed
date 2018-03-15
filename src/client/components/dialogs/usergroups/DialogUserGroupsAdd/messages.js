/*
 * UserGroupsDialogs Messages
 *
 * This contains all the text for the UserGroupsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'usergroups.dialog.add.title',
    defaultMessage: 'Add user grop'
  },

  form : {
    nameGroup: {
      title: {
        id: 'usergroups.dialog.add.form.nameGroup.title',
        defaultMessage: 'Name group: '
      },

      hint: {
        id: 'usergroups.dialog.add.form.nameGroup.hint',
        defaultMessage: 'name group'
      }
    },

    sections: {
      title: {
        id: 'usergroups.dialog.add.form.sections.title',
        defaultMessage: 'Sections: '
      },

      hint: {
        id: 'usergroups.dialog.add.form.sections.hint',
        defaultMessage: 'section'
      }
    }
  },

  button: {
    cancel: {
      id: 'usergroups.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    add: {
      id: 'usergroups.dialog.add.button.save',
      defaultMessage: 'Add'
    }
  }
});
