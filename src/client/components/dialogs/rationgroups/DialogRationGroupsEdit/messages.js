/*
 * RationsDialogs Messages
 *
 * This contains all the text for the RationsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.rationgroup.dialog.edit.title',
    defaultMessage: 'Edit ration group'
  },

  form : {
    group: {
      title: {
        id: 'rations.rationgroup.dialog.edit.form.group.title',
        defaultMessage: 'Group: '
      },

      hint: {
        id: 'rations.rationgroup.dialog.edit.form.group.hint',
        defaultMessage: '...'
      }
    },

    groupRate: {
      id: 'rations.rationgroup.dialog.edit.form.group.groupRate',
      defaultMessage: 'Group rate [%]'
    }
  },

  button: {
    cancel :  {
      id: 'rations.rationgroup.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'rations.rationgroup.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
