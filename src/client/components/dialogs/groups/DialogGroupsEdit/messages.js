/*
 * GroupsDialogs Messages
 *
 * This contains all the text for the GroupsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'groups.dialog.edit.title',
    defaultMessage: 'Edit group'
  },

  form : {
    name: {
      title: {
        id: 'groups.dialog.edit.form.name.title',
        defaultMessage: 'Enter the group name'
      },

      hint: {
        id: 'groups.dialog.edit.form.name.hint',
        defaultMessage: 'Name group'
      }
    },

    lactating: {
      id: 'groups.dialog.edit.form.lactating',
      defaultMessage: 'lactating: '
    }
  },

  button: {
    cancel :  {
      id: 'groups.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'groups.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
