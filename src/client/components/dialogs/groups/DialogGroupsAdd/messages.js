/*
 * GroupsDialogs Messages
 *
 * This contains all the text for the GroupsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'groups.dialog.add.title',
    defaultMessage: 'Add group'
  },

  form : {
    name: {
      title: {
        id: 'groups.dialog.add.form.name.title',
        defaultMessage: 'Enter the group name'
      },

      hint: {
        id: 'groups.dialog.add.form.name.hint',
        defaultMessage: 'Name group'
      }
    },

    lactating: {
      id: 'groups.dialog.add.form.lactating',
      defaultMessage: 'lactating: '
    }
  },

  button: {
    cancel :  {
      id: 'groups.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'groups.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
