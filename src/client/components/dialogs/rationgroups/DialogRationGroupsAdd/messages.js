/*
 * RationsDialogs Messages
 *
 * This contains all the text for the RationsDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.rationgroup.dialog.add.title',
    defaultMessage: 'Add ration group'
  },

  form : {
    group: {
      title: {
        id: 'rations.rationgroup.dialog.add.form.group.title',
        defaultMessage: 'Group: '
      },

      hint: {
        id: 'rations.rationgroup.dialog.add.form.group.hint',
        defaultMessage: '...'
      }
    },

    groupRate: {
      id: 'rations.rationgroup.dialog.add.form.group.groupRate',
      defaultMessage: 'Group rate [%]'
    }
  },

  button: {
    cancel :  {
      id: 'rations.rationgroup.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'rations.rationgroup.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
